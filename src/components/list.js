import React from "react";
import data from "./data";
import "../styles/App.css";

const List = ({categeory}) => {
    return (
        <div id="list">
            {
                data.map((list) => {
                    if(categeory === "All" || list.category === categeory){
                    return (
                        <div key={list.id} >
                            <img src={list.img} alt={list.title}/>
                            <div>
                                <p>{list.title}</p>
                                <p>${list.price}</p>
                                <p>{list.desc}</p>
                            </div>
                        </div>
                    )
                    }
                })
            }
        </div>
    )
}

export default List;