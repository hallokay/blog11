import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const PostPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const getPostById = useStoreState( state => state.getPostById);
  const deletePost = useStoreActions(actions => actions.deletePost);
  const post = getPostById(id);

  const handleDelete = (id) => {
    deletePost(id)
    navigate('/');
  }

  
  return (
    <main className='PostPage'> 
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dataTime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
            <button className='deleteButton' onClick={() => handleDelete(post.id)}> Delete Post</button>
          </>}
          {!post && 
            <>
              <h2>게시물을 찾을 수 없습니다.</h2>
              <p>
                <Link to='/'>첫 화면으로 가기</Link>
              </p>
            </>
            }
      </article>

    </main>
  )
}

export default PostPage