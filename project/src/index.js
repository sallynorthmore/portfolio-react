import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { IntlProvider } from 'react-intl';
// import {BrowserRouter, Match, Miss} from 'react-router';

render(<IntlProvider locale="en">
        <App />
    </IntlProvider>, document.querySelector('#main'));
