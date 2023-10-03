import Carousel from 'react-bootstrap/Carousel';
import '../src/css/carousel.css'

function Feminino(){
    return(
        <Carousel className='carousel_div' data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\watch.jpg"
            alt="First slide"
            height={'500px'}
            />
            <Carousel.Caption className='c_cap'>
            <h5>Relógio Guess</h5>
            <p>Relógio Feminino Elegante</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\high.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Salto Fino</h5>
            <p>Salto Fino Preto</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="src\assets\w_shirt.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Camiseta Preta</h5>
            <p>
                Camiseta Preta Feminina simples
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Feminino