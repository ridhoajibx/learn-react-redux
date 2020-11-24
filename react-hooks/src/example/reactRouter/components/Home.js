import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            try {
                setPosts(res.data.slice(0, 10))
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    const listMarkup = (
        <div>
            { posts.length > 0 ?
                posts.map((post) => (
                    <Card key={post.id} className="shadow p-3 mb-5 bg-white rounded">
                        <CardBody>
                            <CardTitle tag="h3"> {post.title} </CardTitle>
                            <CardText> {post.body} </CardText>
                        </CardBody>
                    </Card>
                )) :
                <div>There are no posts</div>
            }
        </div>
    )
    return (
        <div className="container">
            <h4>Home</h4>
            { listMarkup}
        </div>
    );
}

export default Home;
