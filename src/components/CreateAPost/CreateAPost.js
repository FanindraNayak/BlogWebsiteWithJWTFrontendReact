import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useUserData } from "../../GlobalState";
import axios from "axios";
const CreateAPost = () => {
	const userData = useUserData((state) => state.userData);
	const [dataOfPost, setDataOfPost] = useState({
		userId: userData.userId,
		title: "",
		imageOfPost: "",
		postDescription: "",
	});
	const handelChange = (e) => {
		setDataOfPost({ ...dataOfPost, [e.target.name]: e.target.value });
	};
	const handelSubmit = async (e) => {
		e.preventDefault();
		const url = `http://localhost:3012/api/post/createPost`;
		const res = await axios.post(url, dataOfPost, {
			withCredentials: true,
		});
		console.log(res);
		setDataOfPost({
			...dataOfPost,
			title: "",
			imageOfPost: "",
			postDescription: "",
		});
	};
	// console.log(dataOfPost);
	// File One
	const uploadImage = async (e) => {
		const file = e.target.files[0];
		const base64Data = await convertToBase64(file);
		// console.log(base64Data);
		setDataOfPost({ ...dataOfPost, imageOfPost: base64Data });
	};
	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};
	return (
		<div style={{ marginLeft: "20vw" }}>
			<Form style={{ width: "40vw" }}>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						name="title"
						onChange={handelChange}
						value={dataOfPost.title}
						placeholder="Title"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="postDescription">
					<Form.Label>postDescription</Form.Label>
					<Form.Control
						type="text"
						name="postDescription"
						onChange={handelChange}
						value={dataOfPost.postDescription}
						placeholder="postDescription"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="postDescription">
					<Form.Label>File</Form.Label>
					<Form.Control
						type="file"
						name="postDescription"
						onChange={(e) => uploadImage(e)}
					/>
				</Form.Group>
				<Button variant="primary" onClick={handelSubmit} type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default CreateAPost;
