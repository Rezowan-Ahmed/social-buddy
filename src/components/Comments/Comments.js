import React, { useEffect } from "react";
import Comment from "../Comment/Comment";
import { useState } from "react";

const Comments = ({ comments }) => {
	const totalComments = comments.length;
	const [images, setImages] = useState([]);

	useEffect(() => {
		const url = `https://randomuser.me/api?results=${totalComments}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setImages(data.results));
	}, [totalComments]);

	return (
		<div>
			{images.length === comments.length &&
				comments.map((comment, index) => (
					<Comment
						key={comment.id}
						comment={comment}
						image={images[index].picture.large}
					/>
				))}
		</div>
	);
};

export default Comments;
