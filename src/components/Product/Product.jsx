import Counter from '../Counter/Counter';
import './Product.css';
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg'
import iconCart from '../../assets/images/icon-cart.svg';

function Product() {
    return (
        <div className='product-container'>
            <section className='product-images'>
                <button>arrow</button>
                <img src={img1Thumb} alt="product image" />
                <button>arrow</button>
            </section>
            <section className='product-description'>
                <h2>SNEAKER COMPANY</h2>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className="prices">
                    <span className='price-discounted'>$125.00</span>
                    <span className='discount'>50%</span>
                    <span className='price-full'><s>$250.00</s></span>
                </div>
                <Counter/>
                <button className='addToCart'><img src={iconCart} alt="shopping cart"/>Add to cart</button>
            </section>
        </div>
    )
}

export default Product;