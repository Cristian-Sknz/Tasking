import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import momentLangauge from'./data/moment_pt-br.json';

import App from './App';
import './index.css';

const momentjs = moment;

momentjs.defineLocale('pt-br', momentLangauge);
library.add(faEllipsisH, faTimes);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);