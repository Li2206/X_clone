import TimeLine from "./component/timeline"
import Side from "./component/sidebar"
import Trends from "./component/trendspack"
import './index.css'
import './component/style.css'
function App(){
   return (<>
   <div className="App-container">
      <Side></Side>
      <TimeLine></TimeLine>
      <Trends></Trends>
   </div>
   </>)
   

}

export default App