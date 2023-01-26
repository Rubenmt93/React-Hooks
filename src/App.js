import {Component, useState} from 'react'

//Reglas d elos hooks

// No se llaman en loops, ni condiciones 
//Siempre en el nivel mas alto del componente

//Solo se llaman en dos partes -> en componentes de react 
//                             -> Custom Hooks

//Cuando creamos un customHooks  siempre el nombre empiexa por use+"Algo"
class App extends Component {
    state={
      contador:0
    }
    incrementar= () => {
      this.setState({ contador: this.state.contador+1})
    }
    render() {
      return(
         <div>
          Contador: {this.state.contador}
          <button onClick={this.incrementar}> Incementar</button>
    </div>
      )
    }
}
// const App= () => {

//   const [contador, setContador] = useState(0)

//   return (
//     <div>
//           Contador: {contador}
//           <button onClick={() => setContador( contador +1)}> Incementar</button>
//     </div>
//   )
// }
export default App;
