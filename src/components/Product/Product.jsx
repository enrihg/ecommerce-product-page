import Counter from '../Counter/Counter';
import Cart from '../Cart/Cart';
import './Product.css';
import img1 from '../../assets/images/image-product-1.jpg'
import img2 from '../../assets/images/image-product-2.jpg'
import img3 from '../../assets/images/image-product-3.jpg'
import img4 from '../../assets/images/image-product-4.jpg'
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg'
import img2Thumb from '../../assets/images/image-product-2-thumbnail.jpg'
import img3Thumb from '../../assets/images/image-product-3-thumbnail.jpg'
import img4Thumb from '../../assets/images/image-product-4-thumbnail.jpg'
import iconCart from '../../assets/images/icon-cart.svg'
import previous from '../../assets/images/icon-previous.svg'
import next from '../../assets/images/icon-next.svg'
import close from '../../assets/images/icon-close.svg'

function Product() {

    let container;
    const previousPicture = () => {
        container = document.querySelector('.images-container');
        container.scrollLeft += -(container.scrollWidth) / 4; /*aaa */
    }

    const nextPicture = () => {
        container = document.querySelector('.images-container');
        container.scrollLeft += (container.scrollWidth) / 4; /*aaa */
    }

    const closeLightbox = () => {
        const lightbox = document.querySelector('.lightbox');
        lightbox.classList.add('close');
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
                <div className='thumbnails-container'>
                    <button className='thumbnail'><img src={img1Thumb} alt="product thumbnail" /></button>
                    <button className='thumbnail'><img src={img2Thumb} alt="product thumbnail" /></button>
                    <button className='thumbnail'><img src={img3Thumb} alt="product thumbnail" /></button>
                    <button className='thumbnail'><img src={img4Thumb} alt="product thumbnail" /></button>
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
            <section className='lightbox'>
                <section className='product-images'>
                    <button onClick={closeLightbox} className='button-close'><img src={close} alt="close" /></button>
                    <button onClick={previousPicture} className='button-previous'><img src={previous} alt="go to previous image" /></button>
                    <div className='images-container'>
                        <img className='product-image' src={img1} alt="product image" />
                        <img className='product-image' src={img2} alt="product image" />
                        <img className='product-image' src={img3} alt="product image" />
                        <img className='product-image' src={img4} alt="product image" />
                    </div>
                    <button onClick={nextPicture} className='button-next'><img src={next} alt="go to next image" /></button>
                    <div className='thumbnails-container'>
                        <button className='thumbnail'><img src={img1Thumb} alt="product thumbnail" /></button>
                        <button className='thumbnail'><img src={img2Thumb} alt="product thumbnail" /></button>
                        <button className='thumbnail'><img src={img3Thumb} alt="product thumbnail" /></button>
                        <button className='thumbnail'><img src={img4Thumb} alt="product thumbnail" /></button>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Product;