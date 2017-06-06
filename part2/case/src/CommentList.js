/**
 * Created by Amyas on 17-6-6.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) =>
                    <Comment
                        key={index}
                        comment={comment}
                        index={index}
                        onDeleteComment={this.handleDeleteComment.bind(this)}
                    />
                )}
            </div>
        )
    }
}

export default CommentList;