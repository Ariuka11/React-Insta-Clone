import React from 'react';
import './commentSection.css';
import {Row, Col} from 'reactstrap';
const CommentSection = props => {
    return (
        <Row>
           <span>{props.comment.username}</span>
           <span>{props.comment.text}</span>
        </Row>
    );
}

export default CommentSection;