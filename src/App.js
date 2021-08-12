import { useEffect, useRef, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/common/Main';
import useWindowDimensions from './helpers/useWindowDimensions';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import DropDown from './components/common/DropDown';
function App() {
  const { height: windowHeight } = useWindowDimensions();
  const [sectionHeight, setSectionHeight] = useState();
  const headerRef = useRef();

  useEffect(() => {
    setSectionHeight(windowHeight - headerRef.current.clientHeight);
  }, [windowHeight]);
  return (
    <Router>
      <div dir="rtl" className="bg-background h-full">
        <Header headerRef={headerRef} />
        <Main sectionHeight={sectionHeight} windowHeight={windowHeight} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
