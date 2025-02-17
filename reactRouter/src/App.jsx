import { Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import PostPage from './PostPage.jsx';
import NewPost from './NewPost.jsx';
import About from './About.jsx';
import Missing from './Missing.jsx';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postBody, setPostBody] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const navigate = useNavigate();

  const getFormattedDateTime = () => {
    const now = new Date()
    return now.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true

    })
  }

  const handleSubmit  = (e) => {
    e.preventDefault()
    if ((!postBody || postBody.trim() === '') || (!postTitle && postTitle.trim() === '')) return;

    const newID = posts.length ? Math.max(...posts.map(post => post.id)) + 1 : 1;
    const newDateTime = getFormattedDateTime();

    const myNewPost = {
      id: newID,
      title: postTitle,
      datetime: newDateTime,
      body: postBody
    }

    setPosts((prevposts) => [...prevposts, myNewPost])

  }


  const handleDelete = (id) => {
    if (id === null) return;

    setPosts((prevPosts) => 
      prevPosts.filter(post => post.id !== id)
    )
    navigate('/');
  }

  return (
    <div>
      <Header title = "React JS Blog"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home posts={posts}/>} />
        <Route 
          path="/post" 
          element={<NewPost 
            handleSubmit = {handleSubmit}
            postTitle = {postTitle}
            setPostTitle = {setPostTitle}
            postBody = {postBody}
            setPostBody = {setPostBody}
            />} 
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handeDelete={handleDelete}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
