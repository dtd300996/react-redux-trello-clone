import TrelloList from 'components/TrelloList';
import { useSelector } from 'react-redux';
import './App.scss';

function App() {
  const lists = useSelector(state => state.lists);
	return (
		<div className="App">
			Hello world!
			<div className="lists">
				{lists.map((list) => (
					<TrelloList key={list.id} title={list.title} cards={list.cards} />
				))}

			</div>
		</div>
	);
}

export default App;
