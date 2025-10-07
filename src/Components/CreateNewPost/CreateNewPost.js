import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "./CreateNewPost.css"
function CreateNewPost() {
    const navigate = useNavigate();
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

    // const handleToSave = () => {
    //     axios.post("http://localhost:3001/blogs", blogsdata)
    //         .then((response) => {
    //             console.log(blogsdata);
    //             console.log("Blog saved:", response.data)
    //             navigate("/blogs")

    //         })
    //     axios.put("http://localhost:3001/blogs/" + id, blogsdata)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.log("Error:", error)
    //         })
    // }
    const userEmail = localStorage.getItem('userEmail')
    function handleToSave() {

        console.log(blogsdata);
        axios.post(`http://localhost:3001/blogs`, {
            ...blogsdata,
            CreatedBy: userEmail,
            CreatedAt: new Date().toLocaleString()
        })
            .then(() => {
                navigate("/blogs");
            })
            .catch(error => console.error("Error creating blog:", error));
    }


    useEffect(() => {

        axios.get("http://localhost:3001/blogs/" + id, blogsdata)
            .then(response => {
                setBlogsData(response.data

                )
            })
            .catch(error => console.error("Error fetching blog:", error));

    }, [id]);

    return (
        <div className="mainSectionOfCreateNewPost">
            <div className="cardOfCreateNewPost">
                <div>
                    <input type="text" placeholder="Title" className="titleOfCreateNewPost" value={blogsdata.title} onChange={handleTitle} />
                </div>
                <div>
                    <textarea type="text"
                        placeholder="Description"
                        rows={20}
                        className="textareaField" value={blogsdata.description} onChange={handleDescription}></textarea>
                </div>
                <div className="btnSection">
                    <div><button className="btnOfCreateNewPost" >Cancel</button></div>
                    <div><button className="btnOfCreateNewPost" onClick={handleToSave}>Save</button></div>

                </div>
            </div>
        </div>
    )

}
export default CreateNewPost;