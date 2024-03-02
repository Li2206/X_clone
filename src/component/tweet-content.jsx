import TweetActions from './tweet-actions'
import TweetBody from './tweet-body'
function TweetContent(){
return(
<div className='tweet-content'>
    <TweetBody></TweetBody>
    <TweetActions></TweetActions>
</div>
)
}
export default TweetContent