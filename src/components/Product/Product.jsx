import './Product.css';
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg'

function Product() {
    return (
        <div className='product-container'>
            <section>
                <button>arrow</button>
                <img src={img1Thumb} alt="product image" />
                <button>arrow</button>
            </section>
            <section>
                <h2>SNEAKER COMPANY</h2>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <span>$125.00</span>
                <span>50%</span>
                <span>$250.00</span>
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
                <button>Add to cart</button>
            </section>
        </div>
    )
}

export default Product;