import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (<div>
    <div className="flex justify-between items-center w-8/12 max-w-[950px] mt-10 border-b-2 border-slate-900 gap-3">
      {
        (item.image === "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg")?
        (<div className="w-10/12 max-w-[260px] flex mr-10 mb-5">
        <img className="w-[250px] h-[250px]" src={item.image}/>
      </div>):
        (<div className="w-10/12 max-w-[250px] flex mb-5">
        <img className="w-[230px] h-[250px]" src={item.image}/>
      </div>)
      }

      <div className="flex flex-col gap-y-5">
        <h1 className="font-bold text-lg">{item.title}</h1>
        <h1 className="text-slate-700">{item.description.split(" ").slice(0,15).join(" ")}</h1>
        <div className="flex justify-between">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase className="text-3xl"/>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default CartItem;
