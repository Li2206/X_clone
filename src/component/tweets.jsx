import Tweet from "./tweet"
import dataArray  from "./data"
function Tweets(){
  return dataArray.map((elt,i)=> <Tweet key={i} content1={elt}></Tweet>
  )
}
export default Tweets