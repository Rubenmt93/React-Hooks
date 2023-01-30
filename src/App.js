import {useRef} from 'react'

const App = () => {
  const ref = useRef()
  const inputRef = useRef()
  const click = () => {console.log(ref);}
  const focus = () =>{
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>focus</button>
    </div>

  ) 
}
export default App