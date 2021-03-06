import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useHistory } from "react-router-dom";
const Home = () => {
	const [allPostsData, setAllPostsData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getAllThePosts();
	}, []);
	const getAllThePosts = async () => {
		setLoading(true);
		const url = `http://localhost:3012/api/post/getAllPosts`;
		const res = await axios.get(url, {
			withCredentials: true,
		});
		if (res.data.length > 0) {
			setAllPostsData(res.data);
			setLoading(false);
		}
	};
	const history = useHistory();

	const allPostsMapped = () => {
		return allPostsData.map((Value) => {
			return (
				<div
					key={Value.postId}
					onClick={() => history.push(`/posts/IndividualPost/${Value.postId}`)}
				>
					<Cards
						postId={Value.postId}
						userId={Value.userId}
						imageOfPost={Value.imageOfPost}
						title={Value.title}
						postDescription={Value.postDescription}
						createdAt={Value.createdAt}
						userName={Value.userName}
					/>
				</div>
			);
		});
	};
	return (
		<div>{loading === false ? allPostsMapped() : <h1>Loading ...</h1>}</div>
	);
};

export default Home;
