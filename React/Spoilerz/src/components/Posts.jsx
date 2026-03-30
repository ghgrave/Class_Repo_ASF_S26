import Replies from "./Replies.jsx";

const Posts = ({kitty}) => {
    let {src, alt, content, date} = kitty
    return (
        <div style={{border: "maroon 2px solid"}}>
            <img src={src} alt={alt}/>
            <p>Date: {date}</p>
            <p>POST CONTENT: {content}
            </p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div>
                {<button>REPLY</button>}
            </div>
            {/*<div>*/}
            {/*    <Replies/>*/}
            {/*    <Replies/>*/}
            {/*    <Replies/>*/}
            {/*</div>*/}

        </div>

    )
}

export default Posts;