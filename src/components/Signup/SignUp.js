import React, { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [value, setValue] = useState({});

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    navigate("/");
  };

  const gettingValuesHandler = (inputData) => {
    setValue(inputData);
  };

  return (
    <>
      <form className={classes.signupForm} onSubmit={submitHandler}>
        <img
          className="sidebar-brand"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
          alt=""
          style={{}}
        />
        <h1>Dinlemeye başlamak için ücretsiz kaydol.</h1>
        <div className={classes.buttonGroup}>
          <Button className={classes.buttonGroup__facebook} type="click">
            <FacebookOutlinedIcon />
            <p>Facebook ile kaydol</p>
          </Button>
          <Button className={classes.buttonGroup__google} type="click">
            <GoogleIcon />
            <p>Google ile kaydol</p>
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
              label="E-posta adresin nedir?"
              onInput={gettingValuesHandler}
              isError={false}
              errorMessage="E-posta adresini girmen gerekiyor"
            />
          </div>
          <div className={classes.inputFormGroup}>
            <Input
              type="email"
              name="email-approve"
              placeholder="E-posta adresini onayla"
              label="E-posta adresini yeniden gir."
              onInput={gettingValuesHandler}
              isError={false}
              errorMessage="E-posta adresini onaylaman gerekiyor"
            />
          </div>
          <div className={classes.inputFormGroup}>
            <Input
              type="password"
              name="password"
              placeholder="Parola oluştur"
              label="Parola oluştur."
              onInput={gettingValuesHandler}
              isError={false}
              errorMessage="Bir parola girmen gerekiyor"
            />
          </div>
          <div className={classes.inputFormGroup}>
            <Input
              type="email"
              name="profile-name"
              placeholder="Profil adı gir."
              label="Sana hangi isimle hitap etmeliyiz?"
              onInput={gettingValuesHandler}
              isError={false}
              errorMessage="Profilin için bir ad gir."
            />
          </div>
          <div className={classes.birthday}>
            <h2>Doğum tarihin nedir?</h2>
            <div className={classes.inputFormGroup__birthdayGroups}>
              <Input
                className={classes.day}
                type="text"
                label="Gün"
                placeholder="GG"
                isError={true}
                errorMessage="Günü gir."
              />
              <Input
                className={classes.month}
                type="month"
                label="Ay"
                placeholder="Ay"
                isError={true}
                errorMessage="Ayı gir."
              />
              <Input
                className={classes.year}
                type="text"
                label="Yıl"
                placeholder="YYYY"
                isError={true}
                errorMessage="Yılı gir."
              />
            </div>
          </div>
        </div>
        <Button className={classes.signupButton}>Kaydol</Button>
        <div className={classes.accountLogin}>
          <p>Hesabın var mı?</p>
          <Link>Oturum aç.</Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
