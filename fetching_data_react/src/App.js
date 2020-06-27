import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const title = { title: "Loading..." };
  const [data, setData] = useState(title);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

      const dataToJson = await res.json();
      setData(dataToJson);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      <h1>Title : {data.title}</h1>
    </div>
  );
}

export default App;
