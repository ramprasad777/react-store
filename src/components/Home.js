import React from 'react';

function Home(props){
    console.log('props', props)
    return(
        <>
            
            <h1>Home Container</h1>
            <div className='item-wrapper' style={{border:'1px solid gray', padding:'10px', display:'flex', alignItems:'center'}}>
                <div className='image-container'>
                    <img src='https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg' alt="phone" style={{maxWidth:'200px'}} />
                </div>
                <div className='detail-container'>
                    <span>Iphone</span>
                    <span>Price : ₹1000</span>
                    <div>
                        <button onClick={()=> props.addToCartHandler({price:1000, name:'Iphone'})}>Add to Cart</button>
                        <button onClick={()=> props.removeToCartHandler()}>Remove to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;