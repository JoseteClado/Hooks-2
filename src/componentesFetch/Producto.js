import { useEffect, useState } from "react";
import Hooks from "./Hooks.js";
import { useParams } from "react-router-dom";

// useEffect(()=>{
//     fetch
// })

function Producto (props){
    
  const [ producto, setProducto ] = useState();
  const { id } = useParams();

  const fetchApi = () => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        setProducto(data);
      });
  };

  useEffect(() => {
    fetchApi();
  });

  if (producto) {
    return (
     
        <div class="main">
          <p><b>Título: </b>{producto.title}</p>
          <p><b>Descripción: </b>{producto.description}</p>
          <p><b>Precio: </b>{producto.price}</p>
          <img src={producto.images[0]}></img>
        </div>
      );  
}else{
    return <div>
        
    </div>;
}
  
}

export default Producto;
