/* eslint-disable no-unused-vars */
import './CreatePost.css'
import { useState } from "react"
import Nav from "../Nav/Nav"
import { useNavigate } from 'react-router-dom'
function CreatePost(props) {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [file, setFile] = useState("")

    const navigate = useNavigate()

    function handleChange(e){

       switch (e.target.id) {
        case 'title':
            setTitle(e.target.value)
            break;
        case 'text':
            setText(e.target.value)
            break;
        case 'blogpic':
            setFile(e.target.files[0])
            break;
        default:
            break;
       }
    }

    
    async function handleSubmit(e){
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title)
            formData.append('text', text)
            formData.append('blogpic', file)

            const response = await fetch('http://localhost:3000/posts', {
                method: "POST",
                credentials: 'include',
                mode: 'cors',
                body: formData
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    return data
                })
            navigate('/')
                

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <Nav />
            <div className="container-fluid">
                <h1>Create Post</h1>
                <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id="text" cols="30" rows="10" className="form-control" onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="post_pic">Post Pic</label>
                        <input type="file" name="blogpic" id="blogpic" accept="image/*" className="form-control" onChange={handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost