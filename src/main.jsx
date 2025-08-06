import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import Wrapper from './Wrapper.jsx';

createRoot(document.getElementById('root')).render(
<Wrapper>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
</Wrapper>,)
