import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../imgs/cultivo.jpg';
import imagen2 from '../imgs/proyectos.webp';
import imagen3 from '../imgs/Bouquets_Couples_in_love_440866_3840x2400.jpg';
import style from './Carousels.module.css';

export function Carousels() {
  const imgStyle={
    filter: 'brightness(50%)',
    width: '40em',
    height:'18em',
  }
  return(
    <Carousel className={style.carousel}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" 
          src={imagen1}
          alt="First slide"
          style={imgStyle}
        />
        <Carousel.Caption>
          <h3 className={style.title}>El clima un aliado para tu cultivo</h3>
          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi delectus perferendis iusto dolores culpa reiciendis incidunt! Dolor iste tempore debitis perferendis optio? Eum quibusdam cum, dignissimos optio unde iste.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
          style={imgStyle}
        />
        <Carousel.Caption>
          <h3 className={style.title}>Monitoreo climático y pronóstico del tiempo para proyectos de corta duración</h3>
          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut nulla, eius provident doloremque maxime. Dolore, at labore, nihil aliquid quia modi voluptatem facilis iure obcaecati nesciunt rem voluptatum maxime.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
          style={imgStyle}
        />
        <Carousel.Caption>
          <h3 className={style.title}>Canal Clima Para Eventos Sociales</h3>
          <p className={style.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptatem atque voluptates, natus expedita recusandae consectetur architecto illum sunt asperiores necessitatibus aliquid tempore incidunt laborum sint distinctio rem magni repudiandae.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}