import React, { useEffect } from 'react'
import cold1 from './Images/Medicines/cold/phenylephrine.jpg'
import cold2 from './Images/Medicines/cold/cetrizine.webp'
import cold3 from './Images/Medicines/cold/oxymetazoline.jpg'
import cold4 from './Images/Medicines/cold/paracetamol.jpg'
import cold5 from './Images/Medicines/cold/pseudoephedrine.jpg'
import './Style.css'
export default function OurProducts() {
  useEffect(()=>{
    const cards = document.querySelectorAll('.card');
    const right_arrow = document.querySelector('.arrow.right');
    const left_arrow = document.querySelector('.arrow.left');

    const shopping_cart = document.querySelector('.shopping-cart');
    const cart_btns = document.querySelectorAll('.add-to-cart');

    let left = 0;
    let card_size = 25.4;
    let total_card_size = cards.length * card_size - card_size * 4;

    if (window.matchMedia('(max-width: 768px)').matches) {
      card_size = 52;
      total_card_size = cards.length * card_size - card_size * 2;
    }

    left_arrow.onclick = () => {
      left -= card_size;

      if (left <= 0) left = 0;
      moveCards(left);
      checkArrowVisibility(left);
    };

    left_arrow.style.opacity = '0';

    right_arrow.onclick = () => {
      left += card_size;

      if (left >= total_card_size) left = total_card_size;
      moveCards(left);
      checkArrowVisibility(left);
    };

    function moveCards(left) {
      for (const card of cards) { // Fix: Declare card as const
        card.style.left = -left + '%';
      }
    }

    function checkArrowVisibility(pos) {
      if (pos === 0) { // Fix: Use === for comparison
        left_arrow.style.opacity = '0';
      } else {
        left_arrow.style.opacity = '1';
      }
      if (pos >= total_card_size) {
        right_arrow.style.opacity = '0';
      } else {
        right_arrow.style.opacity = '1';
      }
    }

    // Fly To Shopping Cart Effect

    for (const cart_btn of cart_btns) { // Fix: Declare cart_btn as const
      cart_btn.onclick = (e) => {
        shopping_cart.classList.add('active');

        let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
        shopping_cart.setAttribute('data-product-count', product_count + 1);

        // finding first grand parent of target button
        let target_parent = e.target.parentNode.parentNode.parentNode;
        target_parent.style.zIndex = '100';
        // Creating a separate Image
        let img = target_parent.querySelector('img');
        let flying_img = img.cloneNode();
        flying_img.classList.add('flying-img');

        target_parent.appendChild(flying_img);

        // Finding the position of the flying image

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
          left: shopping_cart_pos.left - (shopping_cart_pos.width / 2 + flying_img_pos.left + flying_img_pos.width / 2),
          top: shopping_cart_pos.bottom - flying_img_pos.bottom + 30,
        };

        console.log(data.top);

        flying_img.style.cssText = `
          --left : ${data.left.toFixed(2)}px;
          --top : ${data.top.toFixed(2)}px;
        `;

        setTimeout(() => {
          target_parent.style.zIndex = '';
          target_parent.removeChild(flying_img);
          shopping_cart.classList.remove('active');
        }, 1000);
      };
    }
  }, []);
  return (
    <div className='body'>
          <section className="slider w-full">
        <div className="card ">
            <div className="card-content">
                <img src={cold1} alt="" className="card-img"/>
                <h1 className="card-title">HP Spectre x360 15</h1>
                <div className="card-body">
                    <div className="card-star">
                        <span className="rating-value">4.5</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p className="card-price">$650.99</p>
                </div>
                <div className="card-footer flex justify-center items-center">
                    <button className="btn2 btn-success">Buy Now</button>
                    <button className="btn2 btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>

        <div className="card ">
            <div className="card-content">
                <img src={cold2} alt="" className="card-img"/>
                <h1 className="card-title">HP Spectre x360 15</h1>
                <div className="card-body">
                    <div className="card-star">
                        <span className="rating-value">4.5</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p className="card-price">$650.99</p>
                </div>
                <div className="card-footer flex justify-center items-center">
                    <button className="btn2 btn-success">Buy Now</button>
                    <button className="btn2 btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>

        <div className="card ">
            <div className="card-content">
                <img src={cold3} alt="" className="card-img"/>
                <h1 className="card-title">HP Spectre x360 15</h1>
                <div className="card-body">
                    <div className="card-star">
                        <span className="rating-value text-white">4.5</span>
                        <span className="star ">&#9733;</span>
                    </div>
                    <p className="card-price text-white">$650.99</p>
                </div>
                <div className="card-footer flex justify-center items-center">
                    <button className="btn2 btn-success">Buy Now</button>
                    <button className="btn2 btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>

        <div className="card ">
            <div className="card-content">
                <img src={cold4} alt="" className="card-img"/>
                <h1 className="card-title">HP Spectre x360 15</h1>
                <div className="card-body">
                    <div className="card-star">
                        <span className="rating-value">4.5</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p className="card-price">$650.99</p>
                </div>
                <div className="card-footer flex justify-center items-center">
                    <button className="btn2 btn-success">Buy Now</button>
                    <button className="btn2 btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>

        <div className="card ">
            <div className="card-content">
                <img src={cold5} alt="" className="card-img"/>
                <h1 className="card-title">HP Spectre x360 15</h1>
                <div className="card-body">
                    <div className="card-star">
                        <span className="rating-value">4.5</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <p className="card-price">$650.99</p>
                </div>
                <div className="card-footer flex justify-center items-center">
                    <button className="btn2 btn-success">Buy Now</button>
                    <button className="btn2 btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>
        
        <span className="arrow left">&#129120;</span>
        <span className="arrow right">&#129122;</span>
    </section>
    <div className="shopping-cart" data-product-count="0">
        <span className="cart-icon">&#128722;</span>
    </div>
    </div>
  )
}
/* {
//       display: flex;
    justify-content: space-around;
    margin: 1rem;
 }*/