
import { FcRating } from "react-icons/fc";

const ProductCard = ({ products }) => {
    const { ProductImage, Price, BrandName, Description, ProductName, Ratings, ProductCreationDate, Category } = products;
    return (
        <div className="flex justify-center">
            <div className="card bg-slate-400 shadow-xl mt-10 w-full sm:w-80 md:w-96 lg:h-[520px]">
                <figure className="flex justify-center mt-4">
                    <img className="w-full h-48 sm:w-[330px] sm:h-60 rounded-xl"
                        src={ProductImage}
                        alt="phone" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex justify-between items-center">
                        ${Price}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2 className="text-lg font-semibold">{ProductName} ({Category})</h2>
                    <p className="text-sm">{Description}</p>
                    <p className="text-sm">{ProductCreationDate}</p>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">Brand: {BrandName}</h2>
                        <div className="flex justify-center items-center text-2xl mt-1">
                            <FcRating className="mr-1" />
                            <span>{Ratings}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

