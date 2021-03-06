import ItemInfoBar from "./ItemInfoBar"
import mastercard from "/src/Images/icons/mastercard.svg"
import delivery from "/src/Images/icons/delivery.svg"
import offer from "/src/Images//icons/offer.svg"

const InfoWebBar = ({modalPayment,modalShipping,modalOffers}) => {



  return (
    <div className= " sm:hidden mt-2 h-24 w-full flex justify-center gap-14 items-center ">
      <ItemInfoBar img={mastercard} info="Medios de pago" text="Ver medios de pago" modal={modalPayment}/>
      
      <ItemInfoBar img={delivery} info="Metodos de envio" text="Ver opciones" modal={modalShipping} href=""/>
      <ItemInfoBar img={offer} info="Super descuentos" text="Ver promociones" modal={modalOffers} href=""/>
    </div>
  )
}

export default InfoWebBar
