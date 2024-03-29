
import "./Item.css"

import { Link } from "react-router-dom"

const Item = ({id, titulo, price, category, img, stock, description}) => {




    return (

    <article className="ProfileCard">
    <h2 className="profileTitle">{titulo}</h2>
    <img src={img} className="profileImg" alt="ItemImg"/>
    <p className="ItemCategory"> 
    <strong>Categoria  </strong><br></br> {category}</p>
    <p className="ItemDescription">{description}</p>
    <strong className="ItemPrice">${price}</strong>



   
     <Link to={`/item/${id}`} className="BotonDetalle button is-success">Ver Detalle</Link>



            </article>
                            )

}
export default Item