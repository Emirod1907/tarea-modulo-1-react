import React from 'react';
import { Registro } from './components/Registro/Registro';


function App(){

//   const handleSubmit = (event)=>{
//     event.preventDefault()
//     alert('Enviado')
//   }

//   const handleClickButtonColor = (color) =>{
//     alert('clickeaste el boton ' + color)
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Ingresa tu nombre:</label>        
//         <input type="text" id="nombre" />
//         <input type="submit" />
//       </form>
//       <button onClick={()=> handleClickButtonColor('Rojo')}>Rojo</button>
//       <button onClick={()=> handleClickButtonColor('Amarillo')}>Amarillo</button>
//       <button onClick={()=> handleClickButtonColor('Azul')}>Azul</button>
//     </div>
//   )
// }

  return(
    <>
    <Registro/>
    </>
  )
}
export default App
