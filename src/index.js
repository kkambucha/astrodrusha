import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider' ;
import theme from './assets/react-toolbox/theme.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
