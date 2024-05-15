import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Rectangle29 from '../src/image/Rectangle 29.svg'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {

  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const img = new Image()
  img.src = Rectangle29
  img.onload = () => setIsImageLoaded(true)
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      {!isImageLoaded && <Loading />}
      <Header />
      <Main />
    </div>
  );
}

export default App;
