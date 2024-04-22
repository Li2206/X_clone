import TweetAction from './tweet-action'
function TweetActions({actions}){
    return(
        <div className="tweet-actions">
           <TweetAction action={actions} /> 
        </div>
    ) 
}
export default TweetActions