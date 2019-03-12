import React from 'react';
import './App.scss';
import Post from './controlls/Post/Post';
let itemList = [
  {
    name: 'I love tyan',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
    contain: 'https://avatanplus.com/files/resources/mid/58ae81f9e11d115a69abb842.png',
    isUrl: true,
    info: { like: 10, repost: 0, view: 1 },
  },
  {
    name: 'I love tyan',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
    contain: 'https://avatanplus.com/files/resources/mid/57699c1f5b0251557489da8d.png',
    isUrl: true,
    info: { like: 10, repost: 0, view: 1 },
  },
  {
    name: 'I love tyan',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
    contain: 'https://i.pinimg.com/originals/6b/ec/bd/6becbddb69df010e9622670ebadd9521.png',
    isUrl: true,
    info: { like: 10, repost: 0, view: 1 },
  },
  {
    name: 'I love tyan',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
    contain: 'https://i.pinimg.com/originals/40/94/a0/4094a09d299f910ee4f5ea61e34dcc1a.jpg',
    isUrl: true,
    info: { like: 10, repost: 0, view: 1 },
  },
  
];
const App = () => (
  <div className='container'>
    <Post itemList = {itemList}/>
  </div>
);
export default App;
