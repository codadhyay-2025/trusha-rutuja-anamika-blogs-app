import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./CreateNewPost.css"
function CreateNewPost(){
    const navigate = useNavigate();
    // const navigateToCreateNewPost =()=>{
    //     navigate("/createnewpost")
    // }
    const [blogsdata,setBlogsData]=useState({title :"",description:""});
    function handleTitle (event) {
        let blog ={...blogsdata};
        blog["title"]=event.target.value
        setBlogsData (blog)
    }
    function handleDescription (event){
            let blog ={...blogsdata};
            blog["description"]=event.target.value
            setBlogsData(blog)
    }

    const handleSave=()=>{
        axios.post("http://localhost:3001/blogs" ,blogsdata)
        .then((response)=>{
         console.log(blogsdata);
         console.log("Blog saved:",response.data)      
        navigate("/createnewpost")
          
        })
        .catch((error) =>{
            console.log("Error:",error)
        })
    }
    
    return (
        <div className="mainSectionOfCreateNewPost">
            <div className="cardOfCreateNewPost">
                    <div>
                        <input type="text" placeholder="Title" className="titleOfCreateNewPost"  value={blogsdata.title} onChange={handleTitle} />
                    </div>
                    <div>
                        <textarea type="text"  
                        placeholder="Description" 
                        rows={20}
                            className="textareaField" value={blogsdata.description} onChange={handleDescription}></textarea>
                    </div>
                    <div className="btnSection">
                        <div><button className="btnOfCreateNewPost" >Cancel</button></div>
                        <div><button className="btnOfCreateNewPost" onClick={handleSave}>Save</button></div>

                    </div>
            </div>
        </div>
    )

}
export default CreateNewPost;