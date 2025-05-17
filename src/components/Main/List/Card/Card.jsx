import React from "react";


const Card = ({data,remove}) => {
    const {title, description } = data;



    return <article >
      <h4>{title}</h4>
      <p>{description}</p>
      
      <button onClick={remove}>Borrar</button>
    </article>;
  };
  
  export default Card;
  