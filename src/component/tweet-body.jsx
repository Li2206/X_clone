import TweetTitle from './tweet-tittle'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
function TweetBody({cnt}){
    return (
        <div className='tweet-body'>
            <TweetTitle ></TweetTitle>
            <TweetText></TweetText>
            <TweetImage></TweetImage>
        </div>
    )
}
export default TweetBody