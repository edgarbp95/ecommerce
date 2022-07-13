import Carousel from '../Components/Carousel/Carousel'
import Carrousel from '../Components/CarouselBanners/Carrousel'
import CarouselMouse from '../Components/CarouselMouse/CarouselMouse'
import ChatWithUs from '../Components/ChatWithUs'
import InfoWebBar from '../Components/InfoBar/InfoWebBar'
import Swal from 'sweetalert2'


const Home = () => {

  const modalPayment = ()=>{
    Swal.fire({
      imageUrl: "https://www.edstiendas.org.ar/wp-content/uploads/2021/01/formas-pago-3.png",
      padding:"2em 1em",
      imageHeight: 150,
      title:"Medios de pago",
      html:'Podes abonar en efectivo, tarjeta de debito/credito, MercadoPago, y más!',
      imageAlt: 'Custom image',
      confirmButtonText:"Cerrar",
      confirmButtonColor:"#ff8a4c",
    
    })
  }

  const modalShipping = ()=>{
    Swal.fire({
      imageUrl: "https://www.zitelia.com/wp-content/uploads/2017/10/metodos-de-envio.jpg",
      title:"Tu paquete en 24 hrs",
      html:'Realizando tu pedido antes de las 14hrs, lo recibes en el día.',
      imageAlt: 'Custom image',
      confirmButtonText:"Cerrar",
      confirmButtonColor:"#ff8a4c",
    
    })
  }

  const modalOffers = ()=>{
    Swal.fire({
      imageUrl: "https://naurua.com/img/descuento-generico-logo.jpg",
      imageHeight: 150,
      title:"Ofertas de fin de Semana",
      html:'Este fin de semana tienes hasta 30% de descuento en efectivo, y hasta 6 cuotas sin interes con tarjeta de credito.',
      imageAlt: 'Custom image',
      confirmButtonText:"Cerrar",
      confirmButtonColor:"#ff8a4c",
    })
  }
 
  return (
    <div className='bg-gray-100'>
      <Carrousel />
      <InfoWebBar modalPayment={modalPayment} modalShipping={modalShipping} modalOffers={modalOffers}/>
      <Carousel />
      <CarouselMouse />
      <ChatWithUs />
    </div>
  )
}

export default Home

