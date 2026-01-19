import './App.css'
import AutoComplete from './component/AutoComplete'
import Buttons from './component/Buttons'
import Checkboxs from './component/Chekboxs'
import  Card  from './component/Card'
import Skeleton from './component/Skeleton'
import Accordion from './component/Accordion'
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
      <hr />
      <Accordion />
    </>
  )
}

export default App
