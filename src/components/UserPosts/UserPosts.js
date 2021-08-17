import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useUserData } from "../../GlobalState";
import Cards from "../Home/Cards";
const UserPosts = () => {
	const userData = useUserData((state) => state.userData);
	const [userPosts, setUserPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getThePostCreatedByTheUser();
	}, []);
	const getThePostCreatedByTheUser = async () => {
		setLoading(true);
		const url = `http://localhost:3012/api/post/getPostByUserId/${userData.userId}`;
		const res = await axios.get(url, {
			withCredentials: true,
		});

		setUserPosts(res.data);
		setLoading(false);
	};
	const history = useHistory();
	const allPostsMapped = () => {
		return userPosts.map((Value) => {
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
	return <div>{loading ? <h1>Loading ...</h1> : allPostsMapped()}</div>;
};

export default UserPosts;
