import { FcRating } from "react-icons/fc";


const ProductCard = ({products}) => {
    const {ProductImage} = products;
    return (
        <div>
            <div className="card bg-slate-400 h-[500px] w-96 shadow-xl my-10 ml-28">
                <figure>
                    <img className="w-[330px] h-60 mt-[35px] rounded-xl"
                        src={products.ProductImage}
                        alt="phons" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        $ 350
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2>sumsung 23 ultre</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>12/09/24</p>
                    <div className="ml-28 flex text-2xl ">
                        <h1 ><FcRating /></h1>
                        <h1 >4.8</h1>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;