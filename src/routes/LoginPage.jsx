import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import styles from "./Loginpage.module.css";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function LoginPage() {
  const [ProfImage, setProfImage] = useState(null);
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  const handleSubmit = () => {
    console.log(
      email.current.value,
      username.current.value,
      password.current.value
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfImage(URL.createObjectURL(file));
    }
  };

  return (
    <Card
      sx={{
        width: 400,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <center>
          <h3
            style={{
              color: "oklch(35.9% 0.144 278.697)",
              padding: "10px",
              backgroundColor: "oklch(82.3% 0.12 346.018)",
            }}
          >
            Login or signUp
          </h3>
        </center>
      </div>

      <CardMedia
        className={styles.profImage}
        sx={{ height: 300 }}
        image={ProfImage || "./profileImage.jpg"}
      />
      <label className="cursor-pointer bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
        <FaCamera
          size={25}
          style={{ position: "relative", left: "225px", bottom: "55px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ visibility: "hidden" }}
        />
      </label>

      <CardContent style={{ marginLeft: "40px" }}>
        <label htmlFor="email">email:</label>
        <br />
        <input
          type="text"
          placeholder="enter your email.ID"
          name="email"
          ref={email}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          placeholder="enter your username"
          name="username"
          ref={username}
        />
        <br />
        <label htmlFor="password">password:</label>
        <br />
        <input type="password" name="password" ref={password} />
        <br />
        <button
          type="submit"
          className={[
            styles.lwi,
            styles.lwk,
            styles.lwn,
            styles.lws,
            styles.lww,
            styles.lwy,
            styles.lwz,
            styles.lxa,
            styles.lxb,
          ].join(" ")}
          style={{ margin: "20px 0 0 60px", padding: "5px 10px" }}
          onClick={handleSubmit}
        >
          Login
        </button>
      </CardContent>

      <CardActions>
        <Button size="small">forgot password?</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
