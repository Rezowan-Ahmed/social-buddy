import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

const Posts = () => {
	const [posts, setPosts] = useState([]);


	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Total Posts: {posts.length}</h1>

			<div> 
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Posts;
