import './index.css';
// App.js veya giriş dosyanızda
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import ReactDOM from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router = {router}/>
  </>,
)
