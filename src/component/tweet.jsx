import TweetContent from './tweet-content'
import TweetAvatar from './tweet-avatar'
function Tweet({content1}){
   
 return(
    <>
   
    <div className="tweet">  
        <TweetAvatar imageAvatar={content1.image}></TweetAvatar>
        <TweetContent></TweetContent>
    </div>
    </>
 )
}
export default Tweet

