import React, { useContext } from 'react';
import ArticleForm from '../forms/ArticleForm';
import CouchForm from '../forms/CouchForm';
import VideoForm from '../forms/VideoForm';
import AdminNav from './AdminNav';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import ServiceForm from '../forms/ServiceForm';
import Section from 'components/common/Section';
import { SectionHeightContext } from 'context/sectionHeightContext';

const AddContent = () => {
  const { path } = useRouteMatch();
  const { windowHeight, headerHeight } = useContext(SectionHeightContext);

  return (
    <>
      <div className="mt-4 flex h-full w-full items-center pb-4 flex-wrap absolute top-0 bottom-0 right-0 left-0">
        <Switch>
          <Route exact path={`${path}/article`}>
            <ArticleForm />
          </Route>
          <Route exact path={`${path}/content`}>
            <CouchForm />
          </Route>
          <Route exact path={`${path}/video`}>
            <VideoForm />
          </Route>
          <Route exact path={`${path}/service`}>
            <ServiceForm />
          </Route>
          <Route exact path={`${path}`}>
            <Redirect from={`${path}`} to={`${path}/article`} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AddContent;
