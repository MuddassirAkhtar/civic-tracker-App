import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>,)
