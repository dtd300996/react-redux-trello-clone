import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './TrelloCard.scss';

function TrelloCard({ text }) {
	return (
		<div className="card">
			<Card className="card__container">
				<CardContent>
					<Typography gutterBottom>{text}</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

const styles = {
	cardContainer: {
		marginBottom: 8,
	},
};

export default TrelloCard;
