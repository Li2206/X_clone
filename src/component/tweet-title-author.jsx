import Img1 from "../assets/Vector.svg"
function TweetTitleAuthor({author}){
 return (<div className="tweet-title-author">
    <span >{author.name}</span>
            <img src={Img1} alt="" />
     </div>
    )
 
}
export default TweetTitleAuthor