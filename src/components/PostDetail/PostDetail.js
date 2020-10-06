import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const PostDetails = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const [user, setUser] = useState({});
	const [comments, setComments] = useState([]);

	const { userId, title, body } = post;
	const { name } = user;

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.json())
			.then((data) => setPost(data))

		if (userId) {
			fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
				.then((response) => response.json())
				.then((data) => setUser(data))


			fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
				.then((response) => response.json())
				.then((data) => setComments(data))
		}
	}, [postId, userId]);

	return (
		<div>
			<h2>{title}</h2>
			<p>Posted By - {name}</p>
			<p>{body}</p>
			<Comments comments={comments} />
		</div>
	);
};

export default PostDetails;
