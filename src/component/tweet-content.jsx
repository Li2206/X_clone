import TweetActions from './tweet-actions'
import TweetBody from './tweet-body'
function TweetContent({content}){
    
return(
<div className='tweet-content'>
    <TweetBody content={content}></TweetBody>
    <TweetActions actions={content}></TweetActions>
</div>
)
}
export default TweetContent