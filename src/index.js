import React from 'react';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider Provider store={store} >
        <App />,
    </Provider >,
);