import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './TrelloCard.scss';

function TrelloCard({ text, id, index }) {
	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<div
					className="card"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Card className="card__container">
						<CardContent>
							<Typography gutterBottom>{text}</Typography>
						</CardContent>
					</Card>
				</div>
			)}
		</Draggable>
	);
}

const styles = {
	cardContainer: {
		marginBottom: 8,
	},
};

export default TrelloCard;
