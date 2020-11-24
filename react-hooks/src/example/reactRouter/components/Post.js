import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Post = (props) => {
    const [post, setPost] = useState({})
    console.log(props, 'post');
    const id = props.match.params.post_id
    useEffect(()=>{
        (async()=>{
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            try {
                setPost(res.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id])
    return (
        <div className="container">
            <h3>Post</h3>
            <Card className="shadow p-3 mb-5 bg-white rounded">
                <CardBody>
                    <CardTitle tag="h3"> {post.title} </CardTitle>
                    <CardText> {post.body} </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Post;
