


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector( (state) => state);
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+ curr.price,0));
  },[cart])
  return (<div>
    {
      cart.length >0?
      (
        <div className="flex justify-center items-center max-w-6xl mx-auto relative">
          <div>
            {
              cart.map((item,index)=>(
                <CartItem item={item} key={item.id} itemIndex={index}/>
              ))
            }
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="absolute top-10 mt-10 flex flex-col gap-1 right-[112px]">
              <div className="uppercase text-xl font-bold text-slate-700">Your Cart</div>
              <div className="font-extrabold uppercase text-5xl text-green-700">Summary</div>
              <p className="text-lg font-bold mt-2 mb-[10px]">
                Total Items:<span> {cart.length}</span>
              </p>
            </div>
            <div className="absolute bottom-[40px] right-[112px] flex flex-col items-center ">
              <p className="text-lg flex w-[250px]">Total Amount: <span className="font-bold text-lg">${totalAmount}</span></p>

              <button className="font-bold rounded-xl border-2 py-3 w-[280px] bg-green-700 text-white text-lg">Checkout Now</button>
            </div>
          </div>
        </div>
      ):
      (
        <div className="flex flex-col justify-center items-center mt-[200px]">
          <p className="text-2xl font-bold ">Cart is Empty</p>
          <NavLink to="/">
            <button className="text-lg border-2 px-5 py-2 bg-green-600 rounded-lg text-white hover:shadow-lg transition duration-300 ease-in hover:scale-105">Shop Now</button>
          </NavLink>
        </div>
      )

    }
  </div>)
};

export default Cart;
