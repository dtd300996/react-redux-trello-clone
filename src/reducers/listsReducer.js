const initialState = [
  {
    title: 'Last Espisode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloribus.'
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
      }
    ]
  },
  {
    title: 'Lorem, ipsum.',
    id: 2,
    cards: [
      {
        id: 0,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloribus.'
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;