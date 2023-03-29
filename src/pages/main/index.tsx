import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';

const root = document.getElementById('root');
// debugger;
if (root) {
  createRoot(root).render(<App />);
}
