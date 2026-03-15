import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* NOTE: App tag is how we run in React. There is an App.tsx file with a function called App and exports the tag. */}
  </StrictMode>
);
