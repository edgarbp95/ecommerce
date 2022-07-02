import { createContext, useState } from "react";


export const ProductsContext = createContext();

    
    

    const ProductsProvider = (props) =>{
        const [viewState,setViewState] = useState();
        const dataProducts = [
                {
                    id:"0",
                    nombre: "Headset Logitech G635 Negro",
                    precio: "$5999",
                    URL: "https://http2.mlstatic.com/D_NQ_NP_698528-MLA42088510406_062020-O.webp",
                    category: "auriculares",
                    index:"",
                    brand: "Logitech"
                },
                {
                    id:"1",
                    nombre: "Headset Logitech G635 Blanco",
                    precio: "$5999",
                    URL: "https://http2.mlstatic.com/D_NQ_NP_748160-MLA40459801205_012020-V.jpg",
                    category:"auriculares",
                    index:""
                },
                {
                    id:"2",
                    nombre:"Headset Razer Kraken USB",
                    precio: "$6999",
                    URL: "https://http2.mlstatic.com/D_NQ_NP_620982-MLA45269556370_032021-O.webp",
                    category: "auriculares",
                    index:""
                },
                {
                    id:"3",
                    nombre:"Mouse Razer Deathadder Elite",
                    precio: "$3999",
                    URL: "https://xt-pc.com.ar/img/productos/Pics_Prod/MOU738.jpg",
                    category: "mouse",
                    index:""
                },
                {
                    id:"4",
                    nombre:"Logitech G502 Hero KDA",
                    precio: "$2999",
                    URL: "https://mexx-img-2019.s3.amazonaws.com/mouse-kda-lol-gamer_40658_1.jpeg",
                    category: "mouse",
                    index:""
                },
                {
                    id:"5",
                    nombre:"Logitech G305 Lightspeed",
                    precio: "$3499",
                    URL: "https://ockam-cloud-thebest.imgix.net/imagenes-s/productos/mouse-logitech-g305-lightspeed-black-87983.jpg?auto=format",
                    category: "mouse",
                    index:""
                },
                {
                    id:"6",
                    nombre:"Marvo Mouse Gaming M513",
                    precio: "$2999",
                    URL: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-marvo-gaming-m513-4800dpi-rgb-7b-0.jpg",
                    category: "mouse",
                    index:""
                },
                {
                    id:"7",
                    nombre:"T Dagger Camaro-TGM306",
                    precio: "$2999",
                    URL: "https://zahcomputers.pk/wp-content/uploads/2022/05/T-DAGGER-Camaro-T-TGM306-RGB-Backlighting-Gaming-Mouse-Price-in-Pakistan-380x380.jpg",
                    category: "mouse",
                    index:""
                },
                {
                    id:"8",
                    nombre:"Logitech G502 Wireless",
                    precio: "$3499",
                    URL: "https://m.media-amazon.com/images/I/51ZLPEu0SmS.jpg",
                    category: "mouse",
                    index:""
                }, {
                    id:"9",
                    nombre:"HyperX Pulsefire Raid RGB",
                    precio: "$3499",
                    URL: "https://mexx-img-2019.s3.amazonaws.com/37366_4.jpeg?v426",
                    category: "mouse",
                    index:""
                }, {
                    id:"10",
                    nombre:"Redragon Griffin M607 Blanco",
                    precio: "$2499",
                    URL: "https://http2.mlstatic.com/D_NQ_NP_999434-MLA43532397665_092020-O.webp",
                    category: "mouse",
                    index:""
                }, {
                    id:"11",
                    nombre:"Steelseries Rival 310 Negro",
                    precio: "$2499",
                    URL: "https://stylewatch.vtexassets.com/arquivos/ids/204364/mouse-gaming-steelseries-rival-310-con-cable-st6806_01.jpg?v=637734740025170000",
                    category: "mouse",
                    index:""
                }, {
                    id:"12",
                    nombre:"Teclado Logitech G PRO",
                    precio: "$2499",
                    URL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/349/695/products/log-gpro_11-ca1b69ecb7c2d3e9ab15941547535331-1024-1024.png",
                    category: "teclado",
                    index:""
                }, {
                    id:"13",
                    nombre:"Apple Watch Series 7 GPS",
                    precio: "$9999",
                    URL: "https://cf.shopee.com.ar/file/f44de202a033befc26ee4aa519bd14dc",
                    category: "smart watch",
                    index:""
                }
        ]   

        return (
            <ProductsContext.Provider value={{ viewState,setViewState,dataProducts }}>
            {props.children}
            </ProductsContext.Provider>

        )
    }

    export default ProductsProvider