import Picture1 from "../assets/Vector1.svg"
import Picture2 from "../assets/Vector-1.svg"
import Picture3 from "../assets/Vector-2.svg"
import Picture4 from "../assets/Group.svg"
function TweetAction({action}){
    return(
        <div className="tweet-action">
            <img src={Picture1} alt="" />
            <span>{action.comment}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture2} alt="" />
            <span>{action.retweet}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture3} alt="" />
            <span>{action.like}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={Picture4} alt="" />
        </div>
    )
}
export default TweetAction