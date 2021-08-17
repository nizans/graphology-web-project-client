import { useEffect, useRef, useState, useCallback, useReducer } from 'react';
import Header from './components/header/Header';
import Main from './components/common/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import useDimensions from './helpers/useDimensions';
import Login from './components/admin/Login';

function App() {
  const [headerRef, headerDimension, headerNode] = useDimensions();
  const [footerRef, footerDimension, footerNode] = useDimensions();
  const [headerHeight, setHeaderHeight] = useState();
  const [footerHeight, setfooterHeight] = useState();
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (headerDimension && footerDimension) {
      setHeaderHeight(headerDimension.height);
      setfooterHeight(footerDimension.height);
    }
  }, [headerDimension, footerDimension]);
  useEffect(() => {
    setHideHeaderFooter(location.pathname.includes('/admin'));
  }, [location.pathname]);
  return (
    <Switch>
      <div className="bg-background w-full flex justify-center h-full relative">
        <div dir="rtl" className="flex flex-col justify-center items-center md:container">
          {!hideHeaderFooter && <Header headerRef={headerRef} />}
          <Main headerHeight={headerHeight} footerHeight={footerHeight} />
          {!hideHeaderFooter && <Footer footerRef={footerRef} />}
        </div>
        {!hideHeaderFooter ? (
          <NavLink to="/admin" className="_text-lg absolute pl-4 bottom-0 left-0">
            ניהול
          </NavLink>
        ) : (
          <NavLink to="/" className="_text-lg absolute pl-4 bottom-0 left-0">
            בחזרה
          </NavLink>
        )}
      </div>
    </Switch>
  );
}

export default App;
