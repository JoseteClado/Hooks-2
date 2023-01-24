/* import logo from './logo.svg';
import './App.css';
import Body from './componentes/Body.js';
import Header from './componentes/Header.js';*/
import Hooks from './componentesFetch/Hooks.js'; 
import './App.css';

function App() {
  return (
    <div>
      <Hooks initialNumber={29}></Hooks>
    </div>
  );
}

export default App;

{/* <Menu arrayMenu = {["menu1","menu2","menu3"]}/>
<Header direcImg="https://sites.google.com/site/bobesponjaloerestodoparami/_/rsrc/1340788562881/patricio-estrella/patricio2%20%281%29.jpg?height=400&width=270"/>

<div class="columnas">
<Body direccionImagen="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" letrasDesc="Esto es un perro" numeroInicial="1"></Body>
<Body direccionImagen="https://estaticos-cdn.elperiodico.com/clip/690a7c8f-559f-455f-b543-41a153fe8106_alta-libre-aspect-ratio_default_0.jpg" letrasDesc="Esto es un gato" numeroInicial="2"></Body>
</div>

<Menu arrayMenu = {["footer1","footer2","footer3"]}/> */}