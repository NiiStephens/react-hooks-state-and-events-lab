import React, {useState} from "react";

function Item({ name, category }) {

  
  const [inCart, setInCart] = useState(false)


  function location(){
    setInCart((inCart => !inCart))
  }

  const setClass = inCart ? "in-cart" : null
  return (
    <li className={setClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={location}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item