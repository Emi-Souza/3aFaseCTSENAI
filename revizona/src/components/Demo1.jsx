import './Demo1.css'
import { useState } from 'react';

function Demo1() {
    const [estado, setEstado] = useState(0)

    function incrementarEstado(){
        setEstado(estado + 1)
    }

    let cornometro = 9;
    function incrementaCornometro(){
        cornometro++
        console.log(cornometro)
    }

    function alertarUsuario(){
        alert('Corra paras as colinas!!!')
    }

  return (
    <div className='container-demo1'>
        <h1>Demo1</h1>
        <button onClick={alertarUsuario}>Clique em cima</button>
        <button onClick={() => {alert("Executei uma arrow function")}}>Ex 
        Arrow Function</button>

         <div>
            Cornometro: {cornometro}
            <button onClick={incrementaCornometro}>+</button>
         </div>
         <div>
            estado {estado}
            <button onClick={incrementarEstado}>+</button>
         </div>
        
    </div>
  )
}

export default Demo1