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
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [brandName, setBrandName] = useState('');
    const [priceRange, setPriceRange] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(
                    `${import.meta.env.VITE_API_URL}/allProducts?page=${currentPage}&limit=8&productName=${searchTerm}&category=${category}&brandName=${brandName}&priceRange=${priceRange}`
                );
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        getData();
    }, [user, currentPage, searchTerm, category, brandName, priceRange]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Helmet>
                <title>OurStore | Home</title>
            </Helmet>
            <h1 className="text-center text-5xl text-yellow-600 font-semibold pt-10 pb-20 h-20">Our Products</h1>
            
            {/* Search Input */}
            <div className="text-center mb-4">
                <input
                    type="text"
                    placeholder="Search by Product Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded"
                />
            </div>

            {/* Filters */}
            <div className="text-center mb-4">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2 border rounded mr-2"
                >
                    <option value="">Select Category</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Button Phone">Button Phone</option>
                </select>
                <select
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="px-4 py-2 border rounded mr-2"
                >
                    <option value="">Select Brand</option>
                    {/* Add all the brands here */}
                    <option value="Sony">Sony</option>
                    <option value="Infinix">Infinix</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Karbonn">Karbonn</option>
                    <option value="Poco">Poco</option>
                    <option value="Asus">Asus</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Tecno">Tecno</option>
                    <option value="Samsung">Samsung</option>
                    <option value="itel">itel</option>
                    <option value="Micromax">Micromax</option>
                    <option value="Realme">Realme</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Google">Google</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Lava">Lava</option>
                </select>
                <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 border rounded"
                >
                    <option value="">Select Price Range</option>
                    <option value="1-500">1 to 500</option>
                    <option value="500-1000">500 to 1000</option>
                    <option value="1000-">1000 and above</option>
                </select>
                <button
                    onClick={() => setCurrentPage(1)}
                    className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded"
                >
                    Apply Filters
                </button>
            </div>

            {/* Product List or No Results Message */}
            {products.length > 0 ? (
                <div className="grid grid-cols-3 ml-28 mr-28">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            products={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-red-500 mt-10">
                    <h2>No products found matching your criteria.</h2>
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-10">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;

// import { Helmet } from "react-helmet-async";
// import ProductCard from "../../ProductCard/ProductCard";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from '../../Provider/AuthProvider';
// import axios from "axios";

// const Home = () => {
//     const { user } = useContext(AuthContext);
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [category, setCategory] = useState('');
//     const [brandName, setBrandName] = useState('');
//     const [priceRange, setPriceRange] = useState('');

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const { data } = await axios(
//                     `${import.meta.env.VITE_API_URL}/allProducts?page=${currentPage}&limit=8&productName=${searchTerm}&category=${category}&brandName=${brandName}&priceRange=${priceRange}`
//                 );
//                 setProducts(data.products);
//                 setTotalPages(data.totalPages);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             }
//         };
//         getData();
//     }, [user, currentPage, searchTerm, category, brandName, priceRange]);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <div>
//             <Helmet>
//                 <title>OurStore | Home</title>
//             </Helmet>
//             <h1 className="text-center text-5xl text-yellow-600 font-semibold pt-10 pb-20 h-20">Our Products</h1>
            
//             {/* Search Input */}
//             <div className="text-center mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search by Product Name"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="px-4 py-2 border rounded"
//                 />
//             </div>

//             {/* Filters */}
//             <div className="text-center mb-4">
//                 <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="px-4 py-2 border rounded mr-2"
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Smartphone">Smartphone</option>
//                     <option value="Button Phone">Button Phone</option>
//                 </select>
//                 <select
//                     value={brandName}
//                     onChange={(e) => setBrandName(e.target.value)}
//                     className="px-4 py-2 border rounded mr-2"
//                 >
//                     <option value="">Select Brand</option>
//                     {/* Add all the brands here */}
//                     <option value="Sony">Sony</option>
//                     <option value="Infinix">Infinix</option>
//                     <option value="Xiaomi">Xiaomi</option>
//                     <option value="Oppo">Oppo</option>
//                     <option value="Huawei">Huawei</option>
//                     <option value="Karbonn">Karbonn</option>
//                     <option value="Poco">Poco</option>
//                     <option value="Asus">Asus</option>
//                     <option value="Vivo">Vivo</option>
//                     <option value="Motorola">Motorola</option>
//                     <option value="Tecno">Tecno</option>
//                     <option value="Samsung">Samsung</option>
//                     <option value="itel">itel</option>
//                     <option value="Micromax">Micromax</option>
//                     <option value="Realme">Realme</option>
//                     <option value="Nokia">Nokia</option>
//                     <option value="Google">Google</option>
//                     <option value="OnePlus">OnePlus</option>
//                     <option value="Lava">Lava</option>
//                 </select>
//                 <select
//                     value={priceRange}
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="px-4 py-2 border rounded"
//                 >
//                     <option value="">Select Price Range</option>
//                     <option value="1-500">1 to 500</option>
//                     <option value="500-1000">500 to 1000</option>
//                     <option value="1000-">1000 and above</option>
//                 </select>
//                 <button
//                     onClick={() => setCurrentPage(1)}
//                     className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded"
//                 >
//                     Apply Filters
//                 </button>
//             </div>

//             {/* Product List */}
//             <div className="grid grid-cols-3 ml-28 mr-28">
//                 {products.map((product) => (
//                     <ProductCard
//                         key={product._id}
//                         products={product}
//                     />
//                 ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-10">
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index + 1}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// // import { Helmet } from "react-helmet-async";
// // import ProductCard from "../../ProductCard/ProductCard";
// // import { useContext, useEffect, useState } from "react";
// // import { AuthContext } from '../../Provider/AuthProvider';
// // import axios from "axios";

// // const Home = () => {
// //     const { user } = useContext(AuthContext);
// //     const [products, setProducts] = useState([]);
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [totalPages, setTotalPages] = useState(0);
// //     const [filters, setFilters] = useState({
// //         brandName: '',
// //         category: '',
// //         priceRange: ''
// //     });
// //     const [searchQuery, setSearchQuery] = useState('');

// //     useEffect(() => {
// //         const fetchProducts = async () => {
// //             try {
// //                 const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allProducts`, {
// //                     params: {
// //                         page: currentPage,
// //                         limit: 8,
// //                         brandName: filters.brandName,
// //                         category: filters.category,
// //                         priceRange: filters.priceRange
// //                     }
// //                 });
// //                 setProducts(data.products);
// //                 setTotalPages(data.totalPages);
// //             } catch (error) {
// //                 console.error("Failed to fetch products:", error);
// //             }
// //         };

// //         fetchProducts();
// //     }, [user, currentPage, filters]);

// //     const handlePageChange = (page) => {
// //         setCurrentPage(page);
// //     };

// //     const handleFilterChange = (e) => {
// //         const { name, value } = e.target;
// //         setFilters(prevFilters => ({
// //             ...prevFilters,
// //             [name]: value
// //         }));
// //     };

// //     const handleSearch = () => {
// //         setFilters(prevFilters => ({
// //             ...prevFilters,
// //             brandName: searchQuery
// //         }));
// //     };

// //     return (
// //         <div>
// //             <Helmet>
// //                 <title>OurStore | Home</title>
// //             </Helmet>
// //             <h1 className="text-center text-5xl text-yellow-600 font-semibold pt-10 pb-20 h-20">Our Products</h1>
            
// //             <div className="flex justify-center mb-5">
// //                 <input
// //                     type="text"
// //                     value={searchQuery}
// //                     onChange={(e) => setSearchQuery(e.target.value)}
// //                     placeholder="Search by brand name"
// //                     className="border p-2"
// //                 />
// //                 <button onClick={handleSearch} className="bg-yellow-500 text-white p-2 ml-2">
// //                     Search
// //                 </button>
// //             </div>

// //             <div className="flex justify-center mb-5">
// //                 <select name="brandName" onChange={handleFilterChange} className="border p-2">
// //                     <option value="">Select Brand</option>
// //                     {/* Add your brand options here */}
// //                     <option value="Brand1">Brand1</option>
// //                     <option value="Brand2">Brand2</option>
// //                 </select>

// //                 <select name="category" onChange={handleFilterChange} className="border p-2 ml-2">
// //                     <option value="">Select Category</option>
// //                     {/* Add your category options here */}
// //                     <option value="Category1">Category1</option>
// //                     <option value="Category2">Category2</option>
// //                 </select>

// //                 <select name="priceRange" onChange={handleFilterChange} className="border p-2 ml-2">
// //                     <option value="">Select Price Range</option>
// //                     <option value="1-500">1 to 500</option>
// //                     <option value="500-1000">500 to 1000</option>
// //                     <option value="1000-">1000 and above</option>
// //                 </select>
// //             </div>

// //             <div className="grid grid-cols-3 ml-28 mr-28">
// //                 {products.map((product) => (
// //                     <ProductCard
// //                         key={product._id}
// //                         products={product}
// //                     />
// //                 ))}
// //             </div>

// //             <div className="flex justify-center mt-10">
// //                 {Array.from({ length: totalPages }, (_, index) => (
// //                     <button
// //                         key={index + 1}
// //                         onClick={() => handlePageChange(index + 1)}
// //                         className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
// //                     >
// //                         {index + 1}
// //                     </button>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;











