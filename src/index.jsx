import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Views/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store.jsx';

const root = createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);