import Carousel from 'react-bootstrap/Carousel';
import '../src/css/carousel.css'
import { NavLink } from 'react-router-dom';

export default function Carossel() {
  return (
    <Carousel className='carousel_div' data-bs-theme="dark">
        <Carousel.Item>
            <NavLink to="/Outlet" className="nav-link">
                <img
                className="d-block w-100"
                src="src\assets\promocao.jpg"
                alt="First slide"
                height={'500px'}
                />          
            </NavLink> 
            <Carousel.Caption className='c_cap'>
            <h5>Seção Outlet</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <NavLink to="/Masculino" className="nav-link">
                <img
                className="d-block w-100"
                src="src\assets\men.jfif"
                alt="Second slide"
                />           
            </NavLink>
            <Carousel.Caption>
            <h5>Seção Masculina</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <NavLink to="/Feminino" className="nav-link">
            <img
                className="d-block w-100"
                src="src\assets\wm.webp"
                alt="Third slide"
            />
        </NavLink>
            <Carousel.Caption>
            <h5>Seção Feminina</h5>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  )
}
