
import BagSummary from "../components/Bag_summary";
import BagItem from "../components/BagItem";

import { useFinalBagItems } from "../store/FinalBagItems";
 import TemporaryDrawer from "../components/sidebar";
  import { ThemeContext } from "../routes/ThemeContext";
import { useContext } from "react";



const Bag = () => {
  const{Light}=useContext(ThemeContext);

 const FinalBagItems = useFinalBagItems();

  return (
    <>
      
       

      <main  className= {Light?'light':'dark'}>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem items={FinalBagItems}/>
          </div>
          
         <BagSummary/>
            
        </div>
      </main>

      
        
    </>
  );
};



export default Bag;
