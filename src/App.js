import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PostData from './pages/PostData/PostData';
import Pagination from './pages/Pagination/Pagination';

function App() {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPostData(data));
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let currentPost = postData.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="App">

      <h2>Welcome! This is simple demo project of pagination</h2>
      <h4>Total posts : {postData.length}</h4>
      <div className='main-container'>
        {
          currentPost.map(post => <PostData
            key={postData.id}
            post={post}
          ></PostData>)
        }
      </div>
      <Pagination
        totalPosts={postData.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
}

export default App;
