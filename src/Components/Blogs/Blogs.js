import { useEffect, useState } from "react";
import "./Blogs.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Blogs() {
    const navigate = useNavigate();
    const { id } = useParams();
    const navigateToCreateNewPost = () =>
    {
        navigate("/createnewpost");
    }
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getAllBlogs();
    }, []);


    function getAllBlogs() {
        axios.get("http://localhost:3001/blogs")
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/blogs/" + id)
            .then((response) => {
                console.log(response);
                getAllBlogs();
            })
            .catch((error) => console.error("Delete error:", error));
    };

    const handleEdit = (id) => {
        //   axios.put("http://localhost:3001/blogs/" + id , blogsdata)
        //     .then((response) => {
        //       console.log(response.data);
        navigate("/createnewpost/" + id);
    };

    return (
        <div className="mainSectionOfBlogsPage">
            <div className='headSectionOfNewPost'>
                <div className='btnAndTitleSection'>
                    <div className='headTitleOfNewPost'>Blogs</div>
                    <div>
                        <button className='createNewPostBtn' onClick={navigateToCreateNewPost}>
                            <i className="fa fa-plus-circle writingIcon" aria-hidden="true"></i> Create new post
                        </button>
                    </div>
                </div>
                <div className='subTitleSectionOfNewPost'>
                    Publish your passions, your way...
                    <hr />
                </div>
            </div>

            <div>
                {blogs.map((singleblog) => (
                    <div key={singleblog.id} className="blogCard">
                        <div className="titleOfBlogsPage">{singleblog.title}</div>
                        <div><strong>Created By </strong><em>{singleblog.CreatedBy}</em></div>
                        <div><strong>Created At </strong><em>{singleblog.CreatedAt}</em></div>
                        <hr />
                        <div>
                            {singleblog.description}
                        </div>
                        <div className="btnSectionOfBlog">
                            <div className="likeAndDislikeBtn">
                                <div><button className="thumbsUpIcon"><i class="fa fa-thumbs-up " aria-hidden="true"></i></button></div>
                                <div><button className="thumbsDownIcon"><i class="fa fa-thumbs-down " aria-hidden="true"></i></button></div>
                            </div>
                            <div className="likeAndDislikeBtn">
                                <div><button className="editBtn" onClick={() => handleEdit(singleblog.id)}><i class="fa fa-pencil writingIcon" aria-hidden="true"></i>Edit</button></div>
                                <div><button className="deleteBtn" onClick={() => handleDelete(singleblog.id)}><i class="fa fa-trash-o writingIcon" aria-hidden="true"></i>Delete</button></div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Blogs;