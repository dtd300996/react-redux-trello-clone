import TrelloActionButton from 'components/TrelloActionButton';
import TrelloCard from 'components/TrelloCard';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import './TrelloList.scss';

function TrelloList(props) {
	const { listID, title, cards, index } = props;
	return (
		<Draggable draggableId={String(listID)} index={index}>
			{(provided) => (
				<div 
					ref={provided.innerRef} 
					{...provided.draggableProps} 
					{...provided.dragHandleProps}
					className="list"
				>
					<Droppable droppableId={String(listID)}>
						{(provided) => (
							<div 
								{...provided.droppableProps} 
								ref={provided.innerRef} 
							>
								<h4 className="list__title">{title}</h4>
								<div className="list__cards">
									{cards.map((card, index) => (
										<TrelloCard key={card.id} id={card.id} index={index} text={card.text} />
									))}
								</div>
								<TrelloActionButton listID={listID} />
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}

export default TrelloList;
