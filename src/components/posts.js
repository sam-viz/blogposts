import React, {Component} from 'react';
import {connect} from 'react-redux';

import post from '../actions/posts';


class Posts extends Component {

    componentDidMount() {
        this.props.post();
    }

    renderList() {
        return this.props.posts.map((post, index) => {
            return <li key={index} >{post.title}</li>
        });
    }
    render() {
        return (
        <ul>
            {this.renderList()}
        </ul>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {post})(Posts);