# Chatbot using React Context API

## Overview

This is a simple chatbot built using **React** that utilizes the **Context API** for state management. The chatbot makes use of Google's **Gemini Free API Key** to process user queries. The app includes features like:

- **useState** for managing local state
- **useContext** for global state management
- **Conditional Rendering** for displaying responses dynamically
- **React Icons** for enhancing the UI

🔗 **Live Demo:** [AI Chatbot](https://vishal-770.github.io/AI-APP/)

⚠️ **Note:** This page is not complete. Some functions will be added, and the page will be made mobile responsive.

---

## Technologies Used

- **React** (with Context API & Hooks)
- **JavaScript (ES6+)**
- **CSS** (for styling)
- **Gemini Free API Key** (for chatbot responses)
- **React Icons** (for UI enhancements)

---

## State Management

The chatbot maintains various states using React's `useState` hook:

```javascript
const [input, setInput] = useState("");
```

- Stores the user input in the chat box.

```javascript
const [recentPrompt, setRecentPrompt] = useState("");
```

- Stores the most recent user query.

```javascript
const [prevPrompts, setPrevPrompts] = useState([]);
```

- Stores an array of previous prompts to keep track of chat history.

```javascript
const [showResult, setShowResult] = useState(false);
```

- Controls whether the chatbot's response should be displayed or not.

```javascript
const [loading, setLoading] = useState(false);
```

- Manages the loading state while waiting for the API response.

```javascript
const [resultData, setResultData] = useState("");
```

- Stores the chatbot's response from the API.

---

## Features

- **Real-time responses** from Gemini API
- **Previous prompts tracking** for better user experience
- **Loading indicator** to show processing status
- **Dynamic rendering** based on user input

---

## How to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/chatbot-react.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd chatbot-react
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the development server:**
   ```sh
   npm start
   ```

---

## Future Enhancements

- Implement local storage for saving chat history
- Add speech-to-text functionality
- Enhance UI with animations and themes
- Make the page fully mobile responsive

---

