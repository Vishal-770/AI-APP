import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context/Context";

const SearchBar = () => {
  const { setInput, input, onSent } = useContext(Context);

  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
          name="text"
          className="input"
          placeholder="search..."
        />
        <span
          onClick={() => {
            onSent(input);
          }}
          className="icon"
        >
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity={1}
                d="M14 5H20"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                opacity={1}
                d="M14 8H17"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                stroke="#000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                opacity={1}
                d="M22 22L20 20"
                stroke="#000"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-container {
    position: fixed;
    bottom: 20px; /* Keep it at the bottom */
    left: 50%;
    transform: translateX(-50%);
    width: 50vw;
    background: white; /* Ensure visibility */
    border-radius: 8px; /* Smooth corners */
    display: flex;
    align-items: center; /* Align input & icon */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Soft shadow */
  }

  .icon {
    position: absolute;
    right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none; /* No extra border */
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .input:focus {
    outline: none;
  }

  .input-container:hover > .icon {
    animation: anim 1s linear infinite;
  }

  @keyframes anim {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }
  }
`;

export default SearchBar;
