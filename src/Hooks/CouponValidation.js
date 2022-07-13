import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { CartContext } from "../Context/CartProvider";


export const CouponValidation = () => {

    const { cart } = useContext(CartContext);

    const [couponState, setCouponState] = useState(0);

    const [couponActiveState, setCouponActiveState] = useState(0);

    let couponsData =["XPRIMER","30%OFF", "MOTHERDAY"]

    const couponValidation = (couponEntered, price)=>{
        if(cart!=""){
            for(let coupon in couponsData){
                if(couponsData[coupon] === couponEntered){
                    if(couponEntered == "XPRIMER"){
                        setCouponActiveState(500)
                        Swal.fire({
                            title: 'Cupon agregado',
                            text: 'Se ha aplicado el descuento',
                            icon: 'success',
                            iconColor:"#ff8a4c",
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:true
                          })
                          return
                    } else if(couponEntered == "30%OFF"){
                        setCouponActiveState(Math.round(price*0.3))
                        Swal.fire({
                            title: 'Cupon agregado',
                            text: 'Se ha aplicado el descuento',
                            icon: 'success',
                            iconColor:"#ff8a4c",
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:true
                          })
                        return
                    } else if(couponEntered == "MOTHERDAY"){
                        setCouponActiveState(Math.round(price*0.2))
                        Swal.fire({
                            title: 'Cupon agregado',
                            text: 'Se ha aplicado el descuento',
                            icon: 'success',
                            iconColor:"#ff8a4c",
                            showConfirmButton: false,
                            timer:1500,
                            timerProgressBar:true
                          })
                        return
                    }
                } else{
                    Swal.fire({
                        title: 'Cupón invalido',
                        text: 'Ingrese un cupón',
                        icon: 'error',
                        iconColor:"#ff8a4c",
                        showConfirmButton: false,
                        timer:1500,
                        timerProgressBar:true
                      })
                }
        } 
        }else{
            Swal.fire({
                title: 'Error',
                text: 'Agrega un producto al carrito.',
                icon: 'error',
                iconColor:"#ff8a4c",
                showConfirmButton: false,
                timer:1500,
                timerProgressBar:true
              })
        }
    }  
        return [couponValidation, couponState, setCouponState, couponActiveState, setCouponActiveState]
}