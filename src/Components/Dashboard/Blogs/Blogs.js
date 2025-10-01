import { useState } from "react";
import "./Blogs.css"
import { useNavigate} from "react-router-dom";

function Blogs() {
    const navigate = useNavigate();
    const navigateToCreateNewPost = () => 
        navigate("/createnewpost");
        
        const [blogsdata, setBlogsData] = useState([]);
    
    
    const blogs= [
        {
            id: 1,
            title: "Hello World",
            createdBy: "ishwari.kanase@gmail.com",
            createdAt: "1st Dec, 2021"
            
        },
        {
            id: 2,
            title: "Hello India",
            createdBy: "ishwari.kanaseee@gmail.com",
            createdAt: "2st Dec, 2021"
            
        }
    ];
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

            return(
            <div>
                {blogsdata.map((singleblog) => (
                    <div key={singleblog.id} className="blogCard">
                        <div className="titleOfBlogsPage">{singleblog.title}</div>
                        <div><strong>Created By</strong><em> {singleblog.createdBy}</em></div>
                        <div><strong>Created At </strong><em>{singleblog.craetedAt}</em></div>
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
                                <div><button className="editBtn"><i class="fa fa-pencil writingIcon" aria-hidden="true"></i>Edit</button></div>
                                <div><button className="deleteBtn"><i class="fa fa-trash-o writingIcon" aria-hidden="true"></i>Delete</button></div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )
        </div>
    )
}
export default Blogs;