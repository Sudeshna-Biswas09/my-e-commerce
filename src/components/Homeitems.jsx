import { IoIosAdd } from "react-icons/io";
import { ThemeContext } from "../routes/ThemeContext";
import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";

import { bagActions } from "../store/BagSlice";





const HomeItems=({item})=>{
  const dispatch=useDispatch();

  const bagArr=useSelector(store=>store.bag);
   
   

 return(
  
     
    <div className={`item-container`}>
      <img className="item-image" src={item.image}alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
     
{bagArr.includes(item.id) ? (
  <button
    type="button"
    className="btn btn-danger btn-add-bag"
    onClick={() => dispatch(bagActions.removeFromBag(item.id))}
  >
    <MdDeleteOutline />Remove
  </button>
) : (
  <button
    type="button"
    className="btn-add-bag "
    onClick={() => dispatch(bagActions.addToBag(item.id))}
  >
    <IoIosAdd />Add to Bag
  </button>
)}









    </div>
  );



}
export default HomeItems;