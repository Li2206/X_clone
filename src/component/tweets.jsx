import Tweet from "./tweet"
import dataArray  from "./data"
function Tweets(){
  return dataArray.map((elt,i)=> <Tweet key={i} content={elt}></Tweet>
  )
}
export default Tweets