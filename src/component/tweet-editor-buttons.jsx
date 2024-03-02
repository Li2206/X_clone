import Button from "./button"
import TweetEditorActions from "./tweet-editor-actions"

function TweetEditorButtons(){
    return (
        <>
        <div className="tweet-editor-buttons">
            <TweetEditorActions></TweetEditorActions>
            <Button></Button>  
        </div>
        </>
    )
}
export default TweetEditorButtons