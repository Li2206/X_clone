function TweetTitleDetails({details}){
 return(
 <div className="tweet-title-details"><span>{details.user} . </span>
 <span >{details.time}</span>
 </div>)
}
export default TweetTitleDetails