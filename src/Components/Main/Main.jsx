import React, { useContext } from "react";
import { MdOutlineComputer } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { BiCricketBall } from "react-icons/bi";
import { IoFootballSharp } from "react-icons/io5";
import "./Main.css";
import SearchBar from "./SearchBar";
import { Context } from "../Context/Context";
import Loader from "./Loader";
const Main = () => {
  const { recentPrompt, showResult, loading, resultData, setInput, input, onSent } =
    useContext(Context);

  return (
    <div className="main">
      <div className="navbar">
        <h1 className="Heading"> SentienceX </h1>

        <img src="src\assets\dp.jpeg"></img>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={()=>{
              
                onSent("Suggest What Programming language should I learn as a complete beginner");
              }}   >
                <p>
                  Suggest What Programming language should I learn as a complete
                  beginner
                </p>
                <MdOutlineComputer size={30} className="logo" />
              </div>
              <div className="card" onClick={()=>{
              
              onSent("Fastest Car in the World 2025");
            }}   >
                <p>Fastest Car in the World 2025</p>
                <FaCarAlt className="logo" size={30} />
              </div>
              <div className="card" onClick={()=>{
              
              onSent("Will RCB Win this IPL");
            }} >
                <p>Will RCB Win this IPL</p>
                <BiCricketBall size={30} className="logo" />
              </div>
              <div className="card" onClick={()=>{
              
              onSent("Is Messi Better Than Ronaldo");
            }} >
                <p>Is Messi Better Than Ronaldo</p>
                <IoFootballSharp className="logo" size={30} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img className="result-img" src="src\logo.webp"></img>
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
            {loading?<div className="loader"> <Loader></Loader></div>: <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

            }


            
            </div>
          </div>
        )}
      </div>
      <SearchBar> </SearchBar>
    </div>
  );
};

export default Main;
