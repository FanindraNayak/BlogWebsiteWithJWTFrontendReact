import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import abc from "../../Images/abc.png";
import Button from "react-bootstrap/Button";

const IndividualPosts = () => {
	let { id } = useParams();

	const [singlePost, setSinglePost] = useState({});
	const [loading, setLoading] = useState(false);
	const getSinglePost = async () => {
		setLoading(true);
		const url = `http://localhost:3012/api/post/getOneSinglePost/${id}`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		if (res) {
			setSinglePost(res.data);
			setLoading(false);
		}
	};
	useEffect(() => {
		getSinglePost();
	}, []);
	const history = useHistory();
	console.log(singlePost);
	return (
		<section
			style={{
				marginLeft: "20vw",
				marginTop: "5vh",
				width: "46vw",
				backgroundColor: "rgb(217, 217, 217)",
			}}
		>
			{loading === false ? (
				<>
					<div>
						<img
							src={singlePost.imageOfPost === "" ? abc : singlePost.imageOfPost}
							style={{ width: "46vw", height: "70vh", marginBottom: "5vh" }}
							alt={singlePost.title}
						/>
					</div>
					<p style={{ fontSize: 40, textAlign: "center", fontWeight: "Bold" }}>
						{singlePost.title}
					</p>
					<p style={{ textAlign: "center" }}>
						Created At :- {singlePost.createdAt}
					</p>
					<p style={{ textAlign: "center", paddingBottom: "10vh" }}>
						{singlePost.postDescription}
					</p>
					<Button onClick={() => history.goBack()} variant="outline-primary">
						Go back
					</Button>
				</>
			) : (
				<h1>Loading ...</h1>
			)}
		</section>
	);
};

export default IndividualPosts;
