import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [flags, setFlags] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setFlags(response.data); // Set the entire array of country data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  },[]);

  return (
    <div className="countries">
    
      {flags.map((e) => (
        <div className="items">
          <img src={e.flags.png} alt={e.flags.alt}/>
          <h2>{e.name.common}</h2>
        </div>
      ))}
    </div>

  );
}

export default App;
