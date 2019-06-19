import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardSubtitle,
    CardBody,
    Row
} from 'reactstrap';

import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <Card className = 'post-card'>
            <CardBody>
                <Row>
                    <img
                    style = {{borderRadius: 90}}
                    className = 'img-thumbnail'
                    src = {props.post.thumbnailUrl}
                    alt = "" />
                    <CardSubtitle className = "cardSubtitle">
                        {props.post.username}
                    </CardSubtitle>
                </Row>
            </CardBody>
            <CardImg 
            className= "Post-image"
            src = {props.post.imageUrl} 
            alt = "" />
            <CardBody>
                <CardText>
                    <div>
                        {props.post.like} likes
                    </div>
                </CardText>
                <CardText>
                    {props.post.comments.map(comment => (
                    <CommentSection comment = {comment}/>)
                    )}
                </CardText>
                <CardText>
                    <div>
                        {props.post.timestamp}
                    </div>
                </CardText>
            </CardBody>
        </Card>
    );
}    
export default Post;