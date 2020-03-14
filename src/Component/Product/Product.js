import React from 'react';
const Product = (props) => {
    console.log(props);
const {balance,name,age,email,picture}=props.ProductName    
    return (
        <div className="all">
    <h1>{name}</h1>  
    <span>{email}</span><br/>
    <b>AGE:{age}</b><br/>
    <button 
         onClick={()=> props.buttonAddproduct(props.ProductName)}
         className="mainBTn">
         add to cart</button>
        </div>
    );
};

export default Product;