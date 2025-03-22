import React, { useContext, useState } from "react";
import "./SideBar.css";
import { IoIosMenu } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { Context } from "../Context/Context";

const SideBar = () => {
  const [collapse, SetCollapse] = useState(true);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <IoIosMenu
          className="menu"
          size={30}
          onClick={() => SetCollapse(!collapse)}
        />

        <div className="new-chat" onClick={() => newChat()}>
          <FiPlus />
          {!collapse ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          <h4>Recents</h4>
          {prevPrompts.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  loadPrompt(item);
                }}
                className="recent-search"
              >
                <FiMessageSquare />
                {!collapse ? <p>{item.slice(0, 20)}... </p> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-icons">
          <IoIosHelpCircleOutline size={30} />
          {!collapse ? <p>Help</p> : null}
        </div>
        <div className="bottom-icons">
          <IoSettingsOutline size={30} />
          {!collapse ? <p>Settings</p> : null}
        </div>
        <div className="bottom-icons">
          <GoHistory size={30} />
          {!collapse ? <p>Activity</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
