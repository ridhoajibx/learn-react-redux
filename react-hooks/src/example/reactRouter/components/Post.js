import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Post = (props) => {
    console.log(props, 'post');
    const id = props.match.params.post_id
    return (
        <div className="container">
            <h3>Post</h3>
            <Card className="shadow p-3 mb-5 bg-white rounded">
                <CardBody>
                    <CardTitle tag="h3"> {id} </CardTitle>
                    <CardText> text </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Post;
