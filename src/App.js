import { useEffect, useRef, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/common/Main';
import useWindowDimensions from './helpers/useWindowDimensions';
import Footer from './components/footer/Footer';

function App() {
  const { height: windowHeight } = useWindowDimensions();
  const [sectionHeight, setSectionHeight] = useState();
  const headerRef = useRef();

  useEffect(() => {
    setSectionHeight(windowHeight - headerRef.current.clientHeight);
  }, [windowHeight]);
  return (
    <div dir="rtl" className="bg-background h-full">
      <Header headerRef={headerRef} />
      <Main sectionHeight={sectionHeight} windowHeight={windowHeight} />
      <Footer />
    </div>
  );
}

export default App;
