import {useState, useEffect} from 'react'
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar =() => {
      setContador(contador+1)
    }
    return [contador, incrementar]
}
const Interval= ({contador}) => {
  useEffect(()=>{
    const i = setInterval(()=>console.log(contador),1000)
    return () =>clearInterval(i)  
  },[contador])
  return (
    <p> Intervalo</p>
  )
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
          <Interval contador= {contador}></Interval>
    </div>
  )
}
export default App;
