import { createContext, useState } from "react";
import run from "../config/api";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const formatResponse = (response) => {
    response = response.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    response = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    response = response.replace(/`([^`]+)`/g, "<code>$1</code>");
    response = response.replace(/\n\* (.*?)\n/g, "<ul><li>$1</li></ul>\n");

    response = response
      .split("\n")
      .map((line) => {
        if (line.startsWith("<ul>") || line.startsWith("<code>")) {
          return line;
        }
        return `<p>${line}</p>`;
      })
      .join("");

    return response;
  };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord + " ");
    }, 75 * index);
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (input) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);

    setPrevPrompts((prev) => {
      return prev.includes(input) ? prev : [...prev, input];
    });

    const response = await run(input);
    const formattedResponse = formatResponse(response);

    let newResponseArray = formattedResponse.split(" ");
    newResponseArray.forEach((word, index) => {
      delayPara(index, word);
    });

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
