import{createSlice}from "@reduxjs/toolkit"



const fetchSlice = createSlice({
	name: 'fetch',
	initialState:{
  fetchDone:false ,//false:'PENDING'||true:'DONE'
    currentlyFetching:false,

  },
	reducers: {
		

   MarkFetchDone:(state)=>{
  state.fetchDone=true;
return state;

    },

  MarkFetchingStarted:(state)=>{state.currentlyFetching=true;
return state;},

  MarkFetchingEnded:(state)=>{
   state.currentlyFetching=false;
return state;

  },

	}
});
export const fetchActions=fetchSlice.actions;

export default fetchSlice;