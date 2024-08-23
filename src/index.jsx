import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Views/App.jsx';
import './index.css';

const root = createRoot(document.getElementById("root")).render(<App />);