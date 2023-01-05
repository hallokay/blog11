import './App.css';
import {Routes, Route} from 'react-router-dom';
// import { DataProvider } from './context/DataContext';
import { useEffect } from "react";
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy';
import Layout from './Layout';

// Pages
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import About from './Pages/About';
import Missing from './Pages/Missing';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';



function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts)
  const {data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
 
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])
  // const navigate = useNavigate();
  // 추후에 history.push는 전부 navigate('/')
  return (
    <Routes>
      {/* 최상위 */}
      <Route path='/' 
        element={<Layout 
          />}>
          {/* /경로에서 기본으로 보여줄 화면 */}
          <Route index 
            element={<Home
              isLoading={isLoading}
              fetchError={fetchError}
              />}/>
            {/* path는 더이상 /안해줘도 됨 */}
          <Route path='post'>
              <Route index element={<NewPost/>}/>
              <Route path=':id' element={<PostPage/>}/>
          </Route>
          <Route path='edit/:id' element={<EditPost/>}/>
          <Route path='about' element={<About/>}/>
          {/* 잘못된 경로일때 */}
          <Route path='*' element={Missing} />
        
      </Route>
    </Routes>

  );
}

export default App;
