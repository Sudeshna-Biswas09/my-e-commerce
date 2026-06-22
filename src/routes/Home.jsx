import HomeItems from "../components/Homeitems";
  import Spinner from "../components/LoadingSpinner";
  import TemporaryDrawer from "../components/sidebar";
  import { ThemeContext } from "../routes/ThemeContext";
import { useContext } from "react";

import {useSelector} from "react-redux"

const Home=()=>{
  
const{Light}=useContext(ThemeContext);
   
const items=useSelector(store=>store.items)
    
const loader=useSelector(store=>store.fetch);
return(
  <>
  
    {loader.currentlyFetching && <Spinner />}
    <main  className= {Light?'light':'dark'}>
      <TemporaryDrawer/>
      <div className="items-container ">
        {items?.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </main>
   
  </>
);

};
export default Home;