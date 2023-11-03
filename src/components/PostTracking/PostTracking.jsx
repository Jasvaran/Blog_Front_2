/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './PostTracking.css'


function PostTracking(props) {

    const [posts, setPosts] = useState([])
    const [publishReturn, setPublishReturn] = useState({})


    useEffect(() => {

        async function findPosts(){
            
            let response = await fetch('http://localhost:3000/posts', {
                method: 'GET',
                mode: 'cors'
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    setPosts(data)
                })
        }
        findPosts()

    }, [publishReturn])



    async function HandlePublishClick(e){
        e.preventDefault();

        let response = await fetch('http://localhost:3000/posts/publishing/' + e.target.id, {
            method: 'PUT',
            mode: 'cors',
            credentials: 'include',
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setPublishReturn(data)
            })

    }


    return (
        <div className="container-fluid">
            <h1 className='header'>Post Status</h1>
            <ul className="list-group" style={{listStyle: 'none'}}>
                {posts.map((post, index) => {
                    return <li className='list-group-item d-flex justify-content-between' key={index}>{post.title}
                    
                        {post.published ? <button className='btn btn-danger' onClick={HandlePublishClick} id={post._id}>Unpublish</button> 
                        
                        : 
                        
                        <button className='btn btn-success' onClick={HandlePublishClick} id={post._id}>Publish</button>}
                    
                    </li>
                })}
            </ul>
        </div>
    )
}


export default PostTracking