import Header from "./header"
import TweetEditor from "./tweet-editor"
import Tweets from "./tweets"
function TimeLine(){
 return(<>
    <div></div>
 <div className="timeline">
     <Header></Header>
     <TweetEditor></TweetEditor> 
     <Tweets></Tweets>  
 </div>
 <div></div>
 </>
 )
}
export default TimeLine