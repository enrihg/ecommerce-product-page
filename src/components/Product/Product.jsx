import Counter from '../Counter/Counter';
import Cart from '../Cart/Cart';
import './Product.css';
import img1 from '../../assets/images/image-product-1.jpg'
import img2 from '../../assets/images/image-product-2.jpg'
import img3 from '../../assets/images/image-product-3.jpg'
import img4 from '../../assets/images/image-product-4.jpg'
import iconCart from '../../assets/images/icon-cart.svg';
import previous from '../../assets/images/icon-previous.svg';
import next from '../../assets/images/icon-next.svg';

function Product({addedItems}) {

    let container;
    const previousPicture = () => {
        container = document.querySelector('.images-container');
        container.scrollLeft += -(container.scrollWidth) / 4; /*aaa */
    }
    
    const nextPicture = () => {
        container = document.querySelector('.images-container');
        container.scrollLeft += (container.scrollWidth) / 4; /*aaa */
    }
    return (
        <div className='product-container'>
            <section className='product-images'>
                <Cart />
                <button onClick={previousPicture} className='button-previous'><img src={previous} alt="go to previous image" /></button>
                <div className='images-container'>
                    <img className='product-image' src={img1} alt="product image" />
                    <img className='product-image' src={img2} alt="product image" />
                    <img className='product-image' src={img3} alt="product image" />
                    <img className='product-image' src={img4} alt="product image" />
                </div>
                <button onClick={nextPicture} className='button-next'><img src={next} alt="go to next image" /></button>
                <div className='thumbnails'>
                    <img src="" alt="foto1" />
                    <img src="" alt="foto2" />
                    <img src="" alt="foto2" />
                    <img src="" alt="foto3" />
                </div>
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
                <div className='button-container'>
                    <Counter />
                    <button className='addToCart'><img src={iconCart} alt="shopping cart" />Add to cart</button>
                </div>
            </section>
        </div>
    )
}

export default Product;