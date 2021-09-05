import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import useDimensions from 'hooks/useDimensions';
import { useEffect } from 'react';
import { SectionHeightContext, SectionHeightProvider } from 'context/sectionHeightContext';
//TODO - Implements lazy loading for ProtectedRoutes

const AppRoutes = () => {
  const sectionHeightContext = useContext(SectionHeightContext);
  const [footerRef, footerDimension] = useDimensions();
  useEffect(() => {
    if (footerDimension) {
      sectionHeightContext.setFooterHeight(footerDimension.height);
    }
  }, [footerDimension, sectionHeightContext]);
  return (
    <SectionHeightProvider>
      <Switch>
        <Route path="/home">
          <Header />
          <PublicRoutes />
          <Footer footerRef={footerRef} />
        </Route>
        <Route path="/admin">
          <ProtectedRoutes />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </SectionHeightProvider>
  );
};

export default AppRoutes;
