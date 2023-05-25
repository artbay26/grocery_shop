import SliderMain from '../slider_main/slider_main';
import CatalogMain from '../catalog_main/catalog_main';
import dataMain from '../../../data/dataMain';


const Home = () => {
    return (
            <div className="main__home">
                <SliderMain sliderList={dataMain.listSlider.items}/>
                <CatalogMain catalogList={dataMain.listCatalog.items}/>               
            </div>           
    )
}

export default Home;