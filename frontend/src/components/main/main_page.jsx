import React from "react";
import { Link } from "react-router-dom";

import "./main_page.css";

class MainPage extends React.Component {
  render() {
    return (
      <div id="page-container"> 

        <div id="main-page-content-wrap">
          <div>
            <video id="bgvid" loop={true} autoPlay="autoplay" controls="controls" playsInline muted>
              <source src="https://fit-challenger.s3.amazonaws.com/180419_Boxing_05_08.mp4" type="video/mp4" />
            </video>
          </div>
          <div id="mainpage-text">
            <div className="main-page-title">
              <img src="https://fit-challenger.s3.amazonaws.com/logo-box/logo_transparent.png" alt="logo"/>
            </div>
            <div className="main-page-slogan">
              Accept the Challenge to be Fit
            </div>
            <div>
              <div className="main-page-links">
                <Link to={"/signup"} className="nav-link">SIGNUP</Link>
                <Link to={"/login"} className="nav-link">LOGIN</Link>
              </div>
            </div>
          </div>
        </div>


        <footer id="footer">
          Copyright &copy; 2020 fitChallenger
        </footer>

      </div>
    );
  }
}

export default MainPage;
