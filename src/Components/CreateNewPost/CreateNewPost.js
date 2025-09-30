import "./CreateNewPost.css"
function CreateNewPost(){
    
    return (
        <div className="mainSectionOfCreateNewPost">
            <div className="cardOfCreateNewPost">
                    <div>
                        <input type="text" placeholder="Title" className="titleOfCreateNewPost"/>
                    </div>
                    <div>
                        <textarea className="textareaField" placeholder="Description" rows={20}>Description</textarea>
                    </div>
                    <div className="btnSection">
                        <div><button className="btnOfCreateNewPost">Cancel</button></div>
                        <div><button className="btnOfCreateNewPost">Save</button></div>

                    </div>
            </div>
        </div>
    )

}
export default CreateNewPost;