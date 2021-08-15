import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import abc from "../../Images/abc.png";
import Cards from "./Cards";
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
	// console.table(allPostsData);
	const allPostsMapped = () => {
		return allPostsData.map((Value) => {
			return (
				<div key={Value.postId}>
					{/* {Value.postId} */}
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
	return <div>{allPostsMapped()}</div>;
};

export default Home;
