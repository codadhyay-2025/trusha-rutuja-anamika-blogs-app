import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./CreateNewPost.css"
function CreateNewPost() {
    const navigate = useNavigate();
     const navigateToBackPage = () => {
        navigate(-1);
    }
    const { id } = useParams();
    // const navigateToCreateNewPost =()=>{
    //     navigate("/createnewpost")
    // }
    const [blogsdata, setBlogsData] = useState({ title: "", description: "" });
    function handleTitle(event) {
        let blog = { ...blogsdata };
        blog["title"] = event.target.value
        setBlogsData(blog)
    }
    function handleDescription(event) {
        let blog = { ...blogsdata };
        blog["description"] = event.target.value
        setBlogsData(blog)
    }

    const handleToSave = () => {
        
        if (id) {
            axios.put("http://localhost:3001/blogs/" + id, blogsdata)
            // .then(() => navigate("/blogs"))
        }
        else {
            axios.post("http://localhost:3001/blogs/", blogsdata)
                .then(() => navigate("/blogs"))
        }
    }
    useEffect(() => {
        if(id){
        axios.get("http://localhost:3001/blogs/" + id, blogsdata)
            .then((response) => {
                setBlogsData(response.data);
            })
        }
    }, []);

    return (
        <div className="mainSectionOfCreateNewPost">
            <div className="cardOfCreateNewPost">
                <div>
                    <input type="text"
                        placeholder="Title"
                        className="titleOfCreateNewPost"
                        value={blogsdata.title}
                        onChange={handleTitle} />
                </div>
                <div>
                    <textarea type="text"
                        placeholder="Description"
                        rows={20}
                        className="textareaField"
                        value={blogsdata.description}
                        onChange={handleDescription}>

                    </textarea>
                </div>
                <div className="btnSection">
                    <div><button className="btnOfCreateNewPost"onClick={navigateToBackPage} >Cancel</button></div>
                    <div><button className="btnOfCreateNewPost" onClick={handleToSave}>Save</button></div>

                </div>
            </div>
        </div>
    )

}

export default CreateNewPost;