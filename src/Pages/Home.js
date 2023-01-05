
import Feed from '../Components/Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ fetchError, isLoading}) => {
  const searchResults = useStoreState(state => state.searchResults);
 

  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts....</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (
        searchResults.length ? <Feed posts={searchResults} /> 
        : <p style={{marginTop: '2rem'}}>
            게시물이 없습니다.
          </p>
      )}
      
    </main>
  )
}

export default Home