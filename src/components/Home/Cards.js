import React from "react";
import Card from "react-bootstrap/Card";
import abc from "../../Images/abc.png";
const Cards = (props) => {
	const {
		userId,
		postId,
		imageOfPost,
		title,
		postDescription,
		createdAt,
		userName,
	} = props;
	return (
		<div>
			<Card style={{ width: "35vw", marginLeft: "30vw", marginTop: 40 }}>
				<Card.Title>
					<div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
						<div style={{ marginLeft: 1, padding: 10 }}>{userName}</div>
						<div
							style={{
								padding: 10,
							}}
						>
							{title}
						</div>
						<div style={{ marginLeft: 1, padding: 10 }}>Card Title</div>
					</div>
				</Card.Title>

				<Card.Img
					style={{ height: "60vh" }}
					variant="top"
					src={imageOfPost === "" ? abc : imageOfPost}
				/>
				<Card.Body>
					<Card.Text>{postDescription.slice(0, 50)} ..</Card.Text>
					<Card.Text style={{ paddingBottom: "1vh" }}>
						Created At:- {createdAt}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Cards;
