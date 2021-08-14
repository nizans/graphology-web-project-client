import { useEffect, useRef, useState, useCallback, useReducer } from 'react';
import Header from './components/header/Header';
import Main from './components/common/Main';
import useWindowDimensions from './helpers/useWindowDimensions';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import useDimensions from './helpers/useDimensions';

function App() {
  const [headerRef, headerDimension, headerNode] = useDimensions();
  const [footerRef, footerDimension, footerNode] = useDimensions();
  const [headerHeight, setHeaderHeight] = useState();
  const [footerHeight, setfooterHeight] = useState();

  useEffect(() => {
    if (headerDimension && footerDimension) {
      setHeaderHeight(headerDimension.height);
      setfooterHeight(footerDimension.height);
    }
  }, [headerDimension, footerDimension]);

  return (
    <Router>
      <div className="bg-background w-full flex justify-center h-full">
        <div
          dir="rtl"
          className="flex flex-col justify-center items-center md:container"
        >
          <Header headerRef={headerRef} />
          <Main headerHeight={headerHeight} footerHeight={footerHeight} />
          <Footer footerRef={footerRef} />
        </div>
      </div>
    </Router>
  );
}

export default App;
