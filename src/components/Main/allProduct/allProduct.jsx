import axios from 'axios';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Counter from '../catalog_main/counter';
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
    let [catalog, setCatalog] = useState([]);
    
    useEffect( () => {
        axios.get('https://dummyjson.com/products/category/groceries')
            .then(response => {
                setCatalog(response.data.products)
            })
        }
    , []);

    const navigate = useNavigate();
    const ShowMoreHandler = (id) => {
        navigate(`/catalogItem/${id}`)
    }

    
        const backHome = () => {
            navigate(`/`);
        }

    return (     
        <div className="main__catalog catalog">
            <div className="catalog__backHome" onClick={backHome}><span><FontAwesomeIcon icon={faHouse}/></span></div>
            <div className="catalog__container">   
                {
                    catalog.map(catalogItem =>
                        <div className="catalog__product product" key={catalogItem.id}>
                           
                           <div className="product__imgBox" onClick={()=>{ShowMoreHandler(catalogItem.id)}}>
                                    <img 
                                        src={catalogItem.images[0]} 
                                        alt={catalogItem.title} 
                                        className="product__img" 
                                    />
                                    <div className="product__discount">{catalogItem.discountPercentage}</div>
                            </div>   
                            <div className="product__textBox">
                                <h1 className="product__title">{catalogItem.title}</h1>
                                <h3 className="product__subtitle">{catalogItem.brand}</h3>
                                <div className="product__priceRateBox">
                                    <div className="product__price">{catalogItem.price}</div>
                                    <div className="product__rate"><span><FontAwesomeIcon icon={faStar}/></span> {catalogItem.rating}</div>
                                </div>
                            </div>
                            <Counter/>
                            <button type="button" className="product__button">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
                        </div>              
                    )
                }
                {
                    catalog.map(catalogItem =>
                        <div className="catalog__wrapper"   key={catalogItem.id}>
                            <div className="catalog__product product">
                                <div className="product__imgBox">
                                        <img 
                                            src={catalogItem.images[1]} 
                                            alt={catalogItem.title} 
                                            className="product__img" 
                                        />
                                        <div className="product__discount">{catalogItem.discountPercentage}</div>
                                </div>   
                                <div className="product__textBox">
                                    <h1 className="product__title">{catalogItem.title}</h1>
                                    <h3 className="product__subtitle">{catalogItem.brand}</h3>
                                    <div className="product__priceRateBox">
                                        <div className="product__price">{catalogItem.price}</div>
                                        <div className="product__rate"><span><FontAwesomeIcon icon={faStar}/></span> {catalogItem.rating}</div>
                                    </div>
                                </div>
                                <Counter/>
                                <button type="button" className="product__button">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
                            </div>
                        </div>              
                    )
                }
                 {
                    catalog.map(catalogItem =>
                        <div className="catalog__wrapper "  key={catalogItem.id}>
                            <div className="catalog__product product">
                                <div className="product__imgBox"  onClick={()=>{ShowMoreHandler(catalogItem.id)}}>
                                        <img 
                                            src={catalogItem.images[2]} 
                                            alt={catalogItem.title} 
                                            className="product__img" 
                                        />
                                        <div className="product__discount">{catalogItem.discountPercentage}</div>
                                </div>   
                                <div className="product__textBox">
                                    <h1 className="product__title">{catalogItem.title}</h1>
                                    <h3 className="product__subtitle">{catalogItem.brand}</h3>
                                    <div className="product__priceRateBox">
                                        <div className="product__price">{catalogItem.price}</div>
                                        <div className="product__rate"><span><FontAwesomeIcon icon={faStar}/></span> {catalogItem.rating}</div>
                                    </div>
                                </div>
                                <Counter/>
                                <button type="button" className="product__button">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
                            </div>
                        </div>              
                    )
                }
            </div>
        </div>   
    );
}

export default AllProduct;