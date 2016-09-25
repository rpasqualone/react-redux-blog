import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		console.log(title);

		return (
			<form onsubmit={handleSubmit}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<lable>Title</lable>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<lable>Categories</lable>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<lable>Content</lable>
					<textarea type="text" className="form-control" />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'PostsNew',
	fields: ['title', 'categories', 'content']
})(PostsNew);
