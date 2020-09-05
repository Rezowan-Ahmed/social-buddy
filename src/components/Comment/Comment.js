import React from "react";

const Comment = ({ comment, image }) => {
	const { name, email, body } = comment;
   
	return (
		<div style={{border:'1px solid black', borderRadius:'10px', margin:'10px 20px', padding:'20px'}}>
			<img style={{borderRadius:'50%'}} src={image} alt={name} />
			<h1>{name}</h1>
			<h4>{email}</h4>
			<p>{body}</p>
		</div>
	);
};

export default Comment;
