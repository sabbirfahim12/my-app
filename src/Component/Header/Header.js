import React, { useState } from 'react';
import data from '../../data/user.json';
import Product from '../Product/Product';
import './Header.css'
const Header = () => {
const first4=data.slice(0,4);
const [name,setName]= useState(first4);
const [cart,setCart]=useState([])
const buttonAddproduct=(ProductName)=>{
    console.log('clciked',ProductName);
    const newCart=[...cart,ProductName];
    setCart(newCart)

}

    return (
        <div>
{
    name.map(pd=><Product 
        buttonAddproduct={buttonAddproduct}

    ProductName={pd}></Product>)
}
        </div>
    );
};

export default Header;