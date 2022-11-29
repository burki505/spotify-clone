import React from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple"
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { authActions } from "../../store/auth/authSlice";


const SignUp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    navigate("/");
  }

  return (
    <>
      <form className={classes.signupForm} onSubmit={submitHandler}>
        <img
          className="sidebar-brand-login"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
          alt=""
          style={{}}
        />
        <hr className={classes.brandBorder} />
        <h1>Devam etmek için Spotify'da oturum aç.</h1>
        <div className={classes.buttonGroup}>
          <Button className={classes.buttonGroup__facebook} type="click">
            <FacebookOutlinedIcon />
            <p>FACEBOOK İLE DEVAM ET</p>
          </Button>
          <Button className={classes.buttonGroup__apple} type="click">
            <AppleIcon />
            <p>APPLE İLE DEVAM ET</p>
          </Button>
          <Button className={classes.buttonGroup__google} type="click">
            <GoogleIcon />
            <p>GOOGLE İLE DEVAM ET</p>
          </Button>
        </div>
        <div className={classes.seperate}>veya</div>
        <h2 className={classes.seperateTitle}>E-posta adresinle kaydol</h2>
        <div className={classes.inputForm}>
          <div className={classes.inputFormGroup}>
            <Input
              type="email"
              name="email"
              placeholder="E-posta adresini gir."
              label="E-posta adresi veya kullanıcı adı."

              isError={false}
              errorMessage="E-posta adresini girmen gerekiyor"
            />
          </div>
          <div className={classes.inputFormGroup}>
            <Input
              type="password"
              name="password"
              placeholder="Parola"
              label="Parola"

              isError={false}
              errorMessage="Bir parola girmen gerekiyor"
            />
          </div>
        
          
        </div>
        <Link className={classes.refreshPassword}>Parolanı mı unuttun</Link>
        <Button className={classes.signupButton}>OTURUM AÇ</Button>
       
      </form>
    </>
  );
};

export default SignUp;
