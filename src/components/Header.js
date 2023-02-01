import React from "react";
function Header(props){
    return(
        <header>
            <div className='add-cart-container' style={{position:'relative'}}>
                <span style={{position:'absolute', top:'5px', right:'0px', zIndex:'1', backgroundColor:'red', borderRadius:'20px', width:'20px', height:'20px', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px'}}>{props.cardData.cardItems.length}</span>
                <img src='https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w=' alt="cart" style={{width:'50px', position:'absolute', right:'0'}} />
            </div>
        </header>
    )
}
export default Header;