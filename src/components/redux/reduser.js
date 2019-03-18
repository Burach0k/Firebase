export const initialState = {
  item: [
    {
      id:1,
      name: 'I love tyan',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
      contain: 'https://avatanplus.com/files/resources/mid/58ae81f9e11d115a69abb842.png',
      isUrl: true,
      info: { like: 0, repost: 0, view: 1 },
    },
    {
      id:2,
      name: 'I love tyan',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
      contain: 'https://avatanplus.com/files/resources/mid/57699c1f5b0251557489da8d.png',
      isUrl: true,
      info: { like: 0, repost: 0, view: 1 },
    },
  ],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TYAN':
    let item = state.item;
    return Object.assign({}, state, {
      item: item.concat([action.payload]),
    })

    default:
      return state;
  }
}
