import { Helmet } from "react-helmet-async";
import ProductCard from "../../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/allProducts`
            )
            setProducts(data)
        }
        getData()
    }, [user])
    console.log(products);
    return (
        <div className="">
            <Helmet>
                <title>OurStore | Home</title>
            </Helmet>
            <h1 className="text-center text-3xl text-yellow-600">This is home</h1>
            <div>
                {
                    products.map(products => <ProductCard
                        key={products._id}
                        products={products}
                    ></ProductCard>)
                }
            </div>
           
        </div>
    );
};

export default Home;