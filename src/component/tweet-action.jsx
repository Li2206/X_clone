import Picture1 from "../assets/Vector1.svg"
import Picture2 from "../assets/Vector-1.svg"
import Picture3 from "../assets/Vector-2.svg"
import Picture4 from "../assets/Group.svg"
function TweetAction(){
    return(
        <div className="tweet-action">
            <img src={Picture1} alt="" />
            <span>57</span>
            <img src={Picture2} alt="" />
            <span>144</span>
            <img src={Picture3} alt="" />
            <span>114</span>
            <img src={Picture4} alt="" />
        </div>
    )
}
export default TweetAction