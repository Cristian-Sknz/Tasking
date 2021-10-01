import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';

import App from './App';

import momentConfig from'./data/moment_pt-br.json';
import './index.css';


library.add(faEllipsisH);
library.add(faTimes);
moment.defineLocale('pt-br', momentConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);