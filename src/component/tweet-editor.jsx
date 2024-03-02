import Avatar from "./avatar";
import TweetEditorButtons from "./tweet-editor-buttons";
import TweetEditorForm from "./tweet-editor-form";

function TweetEditor(){
    return(
        <>
        <div className="tweet-editor">
            <Avatar></Avatar>
            <TweetEditorForm></TweetEditorForm>
        </div>
        </>
    )
}
export default TweetEditor