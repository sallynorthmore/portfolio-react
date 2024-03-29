import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Project from './components/Project';
import "./components/base.css";

const Root = () => {

  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        {/* <Match pattern="/project/:projectid" render={App} /> */}
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<IntlProvider locale="en">
        <Root />
    </IntlProvider>, document.querySelector('#main'));
