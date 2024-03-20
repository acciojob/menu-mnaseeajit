import React, { useState }  from "react";
import Navbar from "./navbar";
import List from "./list";
import "../styles/App.css";

const App = () => {
    const [categeory , setCategeory] = useState("All");
    return (
        <>
            <Navbar setCategeory={setCategeory}/>
            <List categeory={categeory} setCategeory={setCategeory}/>
        </>
    )
}

export default App;