import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import FetchItems from "../components/Fetchitems";





function App() {
  





  return (
    < div >
    
    <FetchItems/>
    <Header/>
   <Outlet></Outlet>
   <Footer/>
      
    </div>
  );
}

export default App;
