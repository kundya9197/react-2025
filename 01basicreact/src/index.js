import React from 'react';
import ReactDOM from 'react-dom/client';
// above two libraries are used to manipulate the dom of web
import App from './App';

// selects the id of html page from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        {/* <Chai /> */}
    </>
);


