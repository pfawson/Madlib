import React from 'react';
import ReactDOM from 'react-dom';

 import home from './components/home';

  //import React from 'bootstrap/dist/css/bootstrap.css';
import React from 'style/main.scss';

 function main() {
    ReactDOM. render(
        <Home />
        , document.querySelector('.app-wrapper'));
}

 document.addEventListener('DOMContentLoaded', main);