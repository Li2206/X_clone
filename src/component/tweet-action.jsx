import Picture1 from "../assets/Vector1.svg"
import Picture2 from "../assets/Vector-1.svg"
import Picture3 from "../assets/Vector-2.svg"
import Picture4 from "../assets/Group.svg"
import { useState } from "react"
function TweetAction({action}){
    const [count, setCount] = useState(action.like);
    function handleClick (){
        setCount(Number(count) + 1)
        
        console.log("mmmm");
    }
    return(
        <div className="tweet-action">
             <img src={Picture1} className="comment" alt="" />
             <span>{action.comment}</span> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture2} className="retweet" alt="" />
            <span>{action.retweet}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture3}  className="like" alt="" onClick={handleClick} />
            <span >{count}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture4} alt="" />
        </div>
    )
}
export default TweetAction