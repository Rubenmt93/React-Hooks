import {useState, useEffect} from 'react'
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar =() => {
      setContador(contador+1)
    }
    return [contador, incrementar]
  }

  const App= () => {
  
    const[contador, incrementar] = useContador(0)
    useEffect(()=>{ 
        document.title=contador
        console.log('bu')
      },
      [contador])
    return (
      <div>
            Contador: {contador}
            <button onClick= {incrementar}> Incementar</button>
      </div>
    )
  }
  export default App;
  