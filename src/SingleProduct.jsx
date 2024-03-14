import PropTypes from 'prop-types';

const SingleProduct = ({ product, handleCart}) => {
    //console.log(handleCart);
    return (
        <div>
            <div className="card w-[300px] h-[250px] text-center border p-2 rounded-xl">
            <img className='w-[100px] h-[100px]' src={product.image} alt="" />
            <h1 className="text-sm font-medium mt-3">{product.title.slice(0,10)}</h1>
            <p className='font-medium mt-3'>{product.description.slice(0,30)}</p>
            <div className="flex justify-around mt-3">
              <h1 className='font-medium text-red-700'>${product.price}</h1>
              <button onClick={() => handleCart(product)}
                className='bg-cyan-500 p-2 font-bold text-white rounded-xl'>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product: PropTypes.object,
    handleCart: PropTypes.func
}
export default SingleProduct;