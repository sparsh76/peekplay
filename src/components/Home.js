
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Newmovie from './Newmovie'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from '../features/user/userSlice'
import Recommends from './Recommends'
import Header from './Header'

function Home() {
  

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  let recommends = [];
  let newmovies = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newmovies = [...newmovies, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
    
 

  dispatch(
    setMovies({
      recommend: recommends,
      newmovie: newmovies,
      original: originals,
      trending: trending,
    })
  );
});
}, [userName]);




  return (
    
    
    <Container>
        <Header />
        <ImgSlider />
        <Viewers />
        <Recommends />
        <Newmovie />
        <Originals />
        <Trending />
    </Container>
  );
};


export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

