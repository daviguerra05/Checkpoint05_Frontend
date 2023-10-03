import Carousel from 'react-bootstrap/Carousel';
import '../src/css/carousel.css'

function Outlet(){
    return(
        <Carousel className='carousel_div' data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\product-1.jpg"
            alt="First slide"
            height={'500px'}
            />
            <Carousel.Caption className='c_cap'>
            <h5>Fone de Ouvido</h5>
            <p>Fone de Ouvido Apple</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\product-7.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Perfume</h5>
            <p>Perfume Jo Malone</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\cat-img-2.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Tênis Esportivo</h5>
            <p>
                Tênis Esportivo Nike
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Outlet