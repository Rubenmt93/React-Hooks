import {useState} from 'react'

//Reglas d elos hooks

// No se llaman en loops, ni condiciones 
//Siempre en el nivel mas alto del componente

//Solo se llaman en dos partes -> en componentes de react 
//                             -> Custom Hooks

//Cuando creamos un customHooks  siempre el nombre empiexa por use+"Algo"
// // // // class App extends Component {
// // // //     state={
// // // //       contador:0
// // // //     }
// // // //     incrementar= () => {
// // // //       this.setState({ contador: this.state.contador+1})
// // // //     }
// // // //     render() {
// // // //       return(
// // // //          <div>
// // // //           Contador: {this.state.contador}
// // // //           <button onClick={this.incrementar}> Incementar</button>
// // // //     </div>
// // // //       )
// // // //     }
// // // // }

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar =() => {
    setContador(contador+1)
  }
  return [contador, incrementar]
}
const App= () => {

  const[contador, incrementar] = useContador(0)

  return (
    <div>
          Contador: {contador}
          <button onClick= {incrementar}> Incementar</button>
    </div>
  )
}
export default App;
