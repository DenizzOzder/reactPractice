import './App.css'
import AutoComplete from './component/AutoComplete'
import Buttons from './component/Buttons'
import Checkboxs from './component/Chekboxs'
import  Card  from './component/Card'
import Skeleton from './component/Skeleton'
function App() {

  return (
    <>
      <AutoComplete />
      <hr/>
      <Buttons />
      <hr />
      <Checkboxs />
      <hr />
      <Card />
      <hr />
      <Skeleton />
    </>
  )
}

export default App
