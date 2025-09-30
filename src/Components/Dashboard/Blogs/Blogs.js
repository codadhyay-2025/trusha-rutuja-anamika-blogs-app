import "./Blogs.css"
function Blogs() {
    return (
        <div className="mainSectionOfBlogsPage">
            <div className='headSectionOfNewPost'>
                <div className='btnAndTitleSection'>
                    <div className='headTitleOfNewPost'>Blogs</div>
                    <div>
                        <button className='createNewPostBtn'>
                            <i className="fa fa-plus-circle writingIcon" aria-hidden="true"></i> Create new post
                        </button>
                    </div>
                </div>
                <div className='subTitleSectionOfNewPost'>
                    Publish your passions, your way...
                    <hr />
                </div>
            </div>
            <div className="blogCard">
                <div className="titleOfBlogsPage">Hello World</div>
                <div><strong>Created By</strong><em> ishwari.kanase@gmail.com</em></div>
                <div><strong>Created At </strong><em>1st Dec, 2021</em></div>
                <hr />
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
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
        </div>
    )
}
export default Blogs;