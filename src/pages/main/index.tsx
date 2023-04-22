import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { trim } from 'lodash';
import 'antd/dist/antd.css';

const root = document.getElementById('root');

trim('');

if (root) {
  createRoot(root).render(<App />);
}
