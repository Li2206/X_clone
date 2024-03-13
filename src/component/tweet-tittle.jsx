import TweetTitleAuthor from "./tweet-title-author"
import TweetTitleDetails from "./tweet-title-details"
function TweetTitle({title}){
    return (
        <div className="tweet-title">
            <TweetTitleAuthor author={title}></TweetTitleAuthor>
            <TweetTitleDetails details={title}></TweetTitleDetails>
        </div>
    )
}
export default TweetTitle