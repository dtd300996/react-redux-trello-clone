import {CONSTANTS} from 'actions';
import {v4} from 'uuid';

const initialState = JSON.parse(localStorage.getItem('TRELLO_LISTS')) || [
    {
      title: 'Last Espisode',
      id: 'listaffasd0',
      cards: [
        {
          id: 'card10',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloribus.'
        },
        {
          id: 'card11',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        }
      ]
    },
    {
      title: 'Lorem, ipsum.',
      id: 'list2',
      cards: [
        {
          id: 'card20',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque vel eaque non architecto quidem voluptates possimus illo perspiciatis soluta pariatur!'
        },
        {
          id: 'card21',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod perspiciatis magni. Ducimus facere aperiam ipsa dolor iusto!'
        },
        {
          id: 'card23',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloribus.'
        },
        {
          id: 'card24',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        }
      ]
    }
  ]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: 
      const newList = {
        title: action.payload,
        cards: [],
        id: v4(),
      }
      localStorage.setItem('TRELLO_LISTS', JSON.stringify([...state, newList]));
      return [...state, newList]

    case CONSTANTS.ADD_CARD: 
      const newCard = {
        text: action.payload.text,
        id: v4(),
      }
      
      const newStateAfterAddCard = state.map(list => {
        if(list.id === action.payload.listID) {
          
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        }

        return list;
      });

      localStorage.setItem('TRELLO_LISTS', JSON.stringify(newStateAfterAddCard));
      return newStateAfterAddCard;

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;
      const newState = [...state];

      // dragging lists around

      if(type === 'list') {
        const list = newState.splice(droppableIdStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        localStorage.setItem('TRELLO_LISTS', JSON.stringify(newState));
        return newState;
      }

      // in the same list
      if(droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      // other list
      if(droppableIdStart !== droppableIdEnd) {
        // find the list where drag happend
        const listStart = state.find(list => droppableIdStart === list.id);
        
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1)

        // find the list where drag end
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)

      }

      localStorage.setItem('TRELLO_LISTS', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}

export default listsReducer;