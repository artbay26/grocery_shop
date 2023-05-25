
import Home from './home/home';
import AllProduct from './allProduct/allProduct'
import ProductCard from './product/product';
import {Routes, Route} from "react-router-dom";



const Main = () => {
    return (
        <main>
            <div className="main__container _container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalogItem/:khvostik" element={<ProductCard/>}/>
                    <Route path="/catalog" element={<AllProduct/>}/>
                </Routes>     
            </div>           
        </main>
    )
}

export default Main;