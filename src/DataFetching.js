import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <h3 className="">User's Data</h3>
            <div className="ui left icon input">
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <i class="users icon"></i>
                <button className="ui primary button" type="button" onClick={handleClick}>Fetch Post</button>
            </div>
            <div className="ui red segment">{post.title}</div>
        </div>

    )
}

export default DataFetching;