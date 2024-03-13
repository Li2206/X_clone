import TweetContent from './tweet-content'
import TweetAvatar from './tweet-avatar'
function Tweet({content}){
 return(
    <div className="tweet">  
        <TweetAvatar imageAvatar={content}></TweetAvatar>
        <TweetContent content={content}></TweetContent>
    </div>
    
 )
}
export default Tweet

