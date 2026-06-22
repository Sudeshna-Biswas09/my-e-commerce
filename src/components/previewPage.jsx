import { ThemeContext } from "../routes/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router";

function AppPreview() {
  const { Light } = useContext(ThemeContext);

  return (
    <main className={Light ? "light" : "dark"}>
      <div className="banner_container ">
        <Link to="/product">
          {" "}
          <img
            src="
https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/21/01ef6306-513e-4c83-9756-afaa8cbf6c6a1747843851646-Desktop_KV-----4.jpg"
            alt="banner"
            className="banner"
          />
        </Link>
      </div>
      <div className="category_heading ">medal worthy brands to bag</div>
      <div className="carousel_wrapper">
        <div className="category_items">
          <Link to="/product">
            <img src="images2\offers\1.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\2.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\3.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\4.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\5.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\6.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\7.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\8.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\9.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\10.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\11.png" alt="category" className="sale" />
          </Link>
          <Link to="/product">
            <img src="images2\offers\12.png" alt="category" className="sale" />
          </Link>
        </div>
      </div>

      <div className="category_heading">shop by category</div>
      <div className="category2_items">
        <Link to="/product">
          <img src="images2\categories\1.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\2.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\3.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\4.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\5.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\6.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\7.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\8.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img src="images2\categories\9.jpg" alt="category" className="sale" />
        </Link>
        <Link to="/product">
          <img
            src="images2\categories\10.jpg"
            alt="category"
            className="sale"
          />
        </Link>
      </div>
    </main>
  );
}

export default AppPreview;
