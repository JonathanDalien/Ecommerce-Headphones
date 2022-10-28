import React, { useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components'
import { client, urlFor } from "../../lib/client"
import Router from 'next/router'
import { useStateContext } from '../../context/StateContext'


const ProductDetails = ({ products, product }) => {
    const { image, name, details, price } = product
    const { decQty, incQty, qty, onAdd, cartItems, setQty, setShowCart } = useStateContext();
    const [index, setIndex] = useState(0);

    const handleAddOnCart = async () => {
        await onAdd(product, qty);
    }

    const handleBuyNow = () => {
        onAdd(product, qty)
        setShowCart(true);
    }

    const routeChangeHandler = () => {
        setIndex(0);
        setQty(1);
    }

    Router.events.on('routeChangeComplete', () => routeChangeHandler())

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img className='product-detail-image' src={`${image[index] ? urlFor(image[index]) : ""}`} />
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} className={i === index ? "small-image selected-image" : "small-image"} onMouseEnter={() => setIndex(i)} />
                        ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>

                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className='price'>{price}€</p>
                    <div className='quantity'>
                        <h3>Menge:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='buttons' className='add-to-cart' onClick={handleAddOnCart}>Zum Einkafswagen hinzufügen</button>
                        <button type='buttons' className='buy-now' onClick={handleBuyNow}>Jetzt Kaufen</button>
                    </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>Das könnte dir auch gefallen</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map(item => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type=="product"] {
        slug{
            current
        }
    }`

    const products = await client.fetch(query)

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type=="product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type=="product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    return {
        props: { products, product }
    }
}


export default ProductDetails