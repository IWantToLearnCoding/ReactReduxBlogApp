import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class NewPost extends Component {
    render() {
        return (
            <div>
                New Post
                <form>

                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(NewPost);
