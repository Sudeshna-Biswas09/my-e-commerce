import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../store/ItemSlice";
import { fetchActions } from "../store/fetchStatus";

const FetchItems=({items})=>{
  const dispatch=useDispatch();

const fetchComponent=useSelector(store=>store.fetch);
   



useEffect(() => {
  if (fetchComponent.fetchDone) {
    return;
  }
  
  const controller = new AbortController();
  const signal = controller.signal;
  
  dispatch(fetchActions.MarkFetchingStarted());

  // This will now pull perfectly from your db.json file!
  fetch('/my-e-commerce/db.json', { signal })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchActions.MarkFetchDone());
      dispatch(fetchActions.MarkFetchingEnded());
      
      // json-server returns an array directly, not an object {items: []}
      // So we just pass the response straight in!
      dispatch(itemActions.addInitialItems(data.items)); 
    })
    .catch(error => {
      if (error.name === 'AbortError') return;
      console.error("Fetch failed:", error);
      dispatch(fetchActions.MarkFetchingEnded());
    }); 

  return () => {
    controller.abort();
  }
}, [fetchComponent, dispatch]);




return (

<>
<div>



</div>
</>
);

}

export default FetchItems;