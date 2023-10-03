import Carousel from 'react-bootstrap/Carousel';
import '../src/css/carousel.css'

export const Masculino = () => {
  return (
    <Carousel className='carousel_div' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\relogio.webp"
          alt="First slide"
          height={'500px'}
        />
        <Carousel.Caption className='c_cap'>
          <h5>Relógio Vivara</h5>
          <p>Relógio Masculino de luxo Vivara</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\sapato-casual01img-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Sapato</h5>
          <p>Sapato Social Masculino de couro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\shirt.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Camiseta Branca</h5>
          <p>
            Camiseta Branca Masculina Simples
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}
