








import { FcRating } from "react-icons/fc";


const ProductCard = ({ products }) => {
    const { ProductImage, Price,BrandName, Description, ProductName, Ratings, ProductCreationDate, Category } = products;
    return (
        <div>
            <div className="card bg-slate-400 h-[520px] w-96 shadow-xl mt-10  ">
                <figure>
                    <img className="w-[330px] h-60 mt-10 rounded-xl"
                        src={products.ProductImage}
                        alt="phons" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        ${products.Price}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2>{products.ProductName}( {products.Category})</h2>
                    <p>{products.Description}</p>
                    <p>{products.ProductCreationDate}</p>
                    <div>
                        <h2 className="text-center">Brand:{products.BrandName}</h2>
                        <div className="ml-32 flex text-2xl ">

                            <h1 className="pt-1 mr-2"><FcRating /></h1>
                            <h1 >{products.Ratings}</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;