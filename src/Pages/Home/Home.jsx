import { Helmet } from "react-helmet-async";
import ProductCard from "../../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import axios from "axios";

const Home = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [sortField, setSortField] = useState('ProductCreationDate');
    const [sortOrder, setSortOrder] = useState('desc');

    const brands = ["Sony", "Infinix", "Xiaomi", "Oppo", "Huawei", "Karbonn", "Poco", "Asus", "Vivo", "Motorola", "Tecno", "Samsung", "itel", "Micromax", "Realme", "Nokia", "Google", "OnePlus", "Lava"];
    const categories = ["Smartphone", "Button Phone"];
    const priceRanges = ["1-500", "500-1000", "1000-"];

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allProducts`, {
                    params: {
                        page: currentPage,
                        limit: 8,
                        search: searchQuery,
                        brandName: selectedBrand,
                        category: selectedCategory,
                        priceRange: selectedPriceRange,
                        sortField: sortField,
                        sortOrder: sortOrder,
                    }
                });
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        getData();
    }, [user, currentPage, searchQuery, selectedBrand, selectedCategory, selectedPriceRange, sortField, sortOrder]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSortChange = (field, order) => {
        setSortField(field);
        setSortOrder(order);
    };

    return (
        <div>
            <Helmet>
                <title>OurStore | Home</title>
            </Helmet>
            <h1 className="text-center text-5xl text-yellow-600 font-semibold pt-10 pb-20">Our Products</h1>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search by Product Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="border p-2 rounded mr-2"
                />
                <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="border p-2 rounded mr-2"
                >
                    <option value="">Select Brand</option>
                    {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border p-2 rounded mr-2"
                >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="border p-2 rounded mr-2"
                >
                    <option value="">Select Price Range</option>
                    {priceRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                    ))}
                </select>
                <button
                    onClick={() => setCurrentPage(1)}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Filter
                </button>
            </div>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => handleSortChange('Price', 'asc')}
                    className="bg-gray-300 p-2 rounded mr-2"
                >
                    Sort by Price: Low to High
                </button>
                <button
                    onClick={() => handleSortChange('Price', 'desc')}
                    className="bg-gray-300 p-2 rounded mr-2"
                >
                    Sort by Price: High to Low
                </button>
                <button
                    onClick={() => handleSortChange('ProductCreationDate', 'desc')}
                    className="bg-gray-300 p-2 rounded mr-2"
                >
                    Sort by Date: Newest First
                </button>
            </div>
            <div className="grid grid-cols-3 ml-28 mr-28">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            products={product}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-3">No products found.</p>
                )}
            </div>
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-1 px-4 py-2 rounded bg-gray-300"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-4 py-2 rounded bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;

