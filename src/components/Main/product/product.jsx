import axios from 'axios';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Counter from '../catalog_main/counter';
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
    let [catalog, setCatalog] = useState({});
    let {ItemID} = useParams();
    
    useEffect( () => {
        axios.get(`https://dummyjson.com/products/${ItemID}`)
            .then(response => {
                setCatalog(response.data)
            })
        }  
        , []);
        
        const navigate = useNavigate();
        const backHome = () => {
            navigate(`/`);
        }
    
    return (
        <div className="main__productCard productCard">
            <div className="productCard__container _container">
                <div className="productCard__close"><span onClick={backHome}><FontAwesomeIcon icon={faXmark}/></span></div>
                <div className="productCard__wrapperItems">
                        <div className="productCard__imgtBox">
                            <img 
                                src={catalog.images ? catalog.images[0] : ''}  
                                alt={catalog.title} 
                                className="productCard__img" 
                            />
                        </div>
                        <div className="productCard__titleBox">
                            <h1 className="productCard__title">{catalog.title}</h1>
                            <h2 className="productCard__subtitle">{catalog.brand}</h2>                                                      
                            <p className="productCard__txt">{catalog.description}</p>
                            <div className="productCard__rate"><span><FontAwesomeIcon icon={faStar}/></span> {catalog.rating}</div>
                            <div className="productCard__priceCounterBox">
                                <div className="productCard__price">$ {catalog.price}</div>
                                <Counter/>
                            </div>
                            <button className="productCard__btn" type="button">Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>                                    
                        </div>
                    </div>
                </div>
            </div>           
    )
}

export default ProductCard;