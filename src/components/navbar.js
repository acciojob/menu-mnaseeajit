import React from "react";

const Navbar = ({setCategeory}) => {
    const handleCategeoryChange = (e) => {
        console.log(e.target.value);
        setCategeory(e.target.value);
    }
    return (
        <div>
        <h1>Our Menu</h1>
        <div id="categeories" >
          <label htmlFor="All" >All</label>
          <input id="All" type="radio" name="Categories" value="All" onChange={handleCategeoryChange} />
          <label htmlFor="breakfast">Breakfast</label>
          <input id="breakfast" type="radio" name="Categories" value="breakfast" onChange={handleCategeoryChange} />
          <label htmlFor="lunch">Lunch</label>
          <input id="lunch" type="radio" name="Categories" value="lunch" onChange={handleCategeoryChange} />
          <label htmlFor="snacks">Snacks</label>
          <input id="snacks" type="radio" name="Categories" value="shakes" onChange={handleCategeoryChange} />
        </div>
     </div>
    )
}
export default Navbar ;