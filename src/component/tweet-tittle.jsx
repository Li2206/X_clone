import Img1 from "../assets/Vector.svg"
import TweetTitleAuthor from "./tweet-title-author"
import TweetTitleDetails from "./tweet-title-details"
function TweetTitle(){
    return (
        <div className="tweet-title">
            <span className="tweet-title">The New York Times</span>
            <img src={Img1} alt="" />
            <TweetTitleAuthor></TweetTitleAuthor>
            <TweetTitleDetails></TweetTitleDetails>
        </div>
    )
}
export default TweetTitle