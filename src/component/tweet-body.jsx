import TweetTitle from './tweet-tittle'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
function TweetBody({content}){
    
    return (
        <div className='tweet-body'>
            <TweetTitle title={content}></TweetTitle>
            <TweetText texte={content.text}></TweetText>
            {content.tweetimg &&  <TweetImage img={content}></TweetImage>}
        </div>
    )
}
export default TweetBody