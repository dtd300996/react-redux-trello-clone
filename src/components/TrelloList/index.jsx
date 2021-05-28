import TrelloCard from 'components/TrelloCard';
import React from 'react';
import './TrelloList.scss';

function TrelloList(props) {
	const { title, cards } = props;
	return (
		<div className="list">
			<h4 className="list__title">{title}</h4>
			<div className="list__cards">
				{cards.map((card) => (
					<TrelloCard key={card.id} text={card.text} />
				))}
			</div>
		</div>
	);
}

export default TrelloList;
