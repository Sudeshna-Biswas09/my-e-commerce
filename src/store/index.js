import{configureStore}from "@reduxjs/toolkit"

import itemSlice from "./ItemSlice";
import fetchSlice from "./fetchStatus";
import bagSlice from "./BagSlice";

 const store = configureStore({reducer:{

   items: itemSlice.reducer,
   fetch: fetchSlice.reducer,
   bag:bagSlice.reducer,

 }})

 

 export default store;