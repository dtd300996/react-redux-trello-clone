import TrelloActionButton from 'components/TrelloActionButton';
import TrelloList from 'components/TrelloList';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { sort } from 'actions';

function App() {
	const lists = useSelector((state) => state.lists);

	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		// TODO: Render logic
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}

		dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type
			)
		);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="App">
				Hello world!
				<Droppable 
					droppableId="all-lists" 
					direction="horizontal"
					type="list"
				>
					{provided => (
						<div 
							className="lists" 
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{lists.map((list, index) => (
								<TrelloList 
									key={list.id} 
									listID={list.id} 
									title={list.title} 
									cards={list.cards} 
									index={index}
								/>
							))}
							<TrelloActionButton list />
						</div>
					)}
				</Droppable>

			</div>
		</DragDropContext>
	);
}

export default App;
