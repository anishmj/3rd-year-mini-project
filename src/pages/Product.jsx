import React, { useContext, useState } from 'react'
import '../css/product.css'
import { products } from '../breakfastdata'
import ShoppingCard from '../components/ShoppingCard'
import { Mycontext } from '../hook/hookcooking';
function Product() {
 const [open,setopen] = useState(false);
 const {count,CardItem} = useContext(Mycontext);

 const openCart= ()=>{
    setopen(pre=>!pre);

 }
  return (

    <div>
  {  open &&   <div className={`${open ? "prod-card-list-close" : "prod-card-list-open"}`}>
{
    CardItem.map(data=>{
        const {name,price,image} = data;
        return <>
            <h1>{name}</h1>
            <img src={image} width="100px" />
            </>
    })
}

        </div> }
        <div class="prod_main">
        <img class="logo" src="https://res.cloudinary.com/dm6wjacnw/image/upload/v1697659320/re3hzodscsydhai6jsie.png"/>
        <a class="inner" href="/">Home</a>
        <a class="inner " href="aboutuspage.html">About us</a>
        <a class="card-heading inner"><h1>Cooking Pal</h1></a>
        <a class="inner " href="contactuspage.html">Contact Us</a>
        <a class="inner " href="productspage.html"><u>Products</u></a>
        <button class="inner" onClick={openCart}>Cart</button>
    </div>

    <div class="container">
        <header>
            <h1>Your Shopping Cart</h1>
            <div class="shopping">
                {/* <img src="image/shopping.svg"/> */}
                <span class="quantity">{count}</span>
            </div>
        </header>x

        <div class="list">  
         {
            products.map(data=>{
                return <ShoppingCard data={data}/>
            })
         }
        </div>
    </div>
    <div class="card">
        <h1>Card</h1>
        <ul class="listCard">
        </ul>
        <div class="checkOut">
            <div class="total">0</div>
            <div class="closeShopping">Close</div>
        </div>
    </div>
    </div>
  )
}

export default Product