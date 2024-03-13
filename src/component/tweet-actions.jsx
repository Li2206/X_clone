import TweetAction from './tweet-action'
function TweetActions({actions}){
    return(
        <div className="tweet-actions">
           <TweetAction action={actions}></TweetAction> 
        </div>
    ) 
}
export default TweetActions