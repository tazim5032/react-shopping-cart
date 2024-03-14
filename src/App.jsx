import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  //json theke data store korte useState use kora hoi
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);



  //data fetch korar jonno useEffect use kora hoi
  useEffect(() =>{
    fetch('./fakedata.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  },[]);

  const handleCart = p =>{
    const isExist = cart.find(pd => pd.id==p.id);
    if(!isExist){
      setCart([...cart, p]);
    }
    else{
      alert('Already in Your Cart')
    }
  }
  console.log(cart);
  return (
    <>
      <div className="main-container lg:flex justify-between mx-[6%] mt-6">

        <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:w-2/3">
          {
            products.map(pd => <SingleProduct key={pd.id} product={pd}
            handleCart={handleCart}></SingleProduct>)
          }

        </div>

        <div className="mt-6 lg:mt-0 bg-yellow-400 shadow-xl lg:w-1/3 rounded-xl h-screen">
          
          <h1 className='text-3xl font-bold text-center mb-6'>Your Cart</h1>

          <div className='flex justify-around'>
            <h1 className='text-xl font-medium'>Title</h1>
            <h1 className='text-xl font-medium'>Price</h1>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
