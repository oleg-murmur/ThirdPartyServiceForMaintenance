import {createRoot} from 'react-dom/client';
import App from './App';
import '@/styles/global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LazyBacket } from '@/pages/backet/backet.lazy';
import { LazyOrder } from '@/pages/order/order.lazy';
import { Suspense } from 'react';
import Admin from './pages/Admin/Admin';
import InfoContainer from './Components/InfoContainer';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const store = setupStore()

const root = document.getElementById('root') as HTMLElement
if(!root){
    throw new Error('root problem')
}
const container = createRoot(root)

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/backet',
            element: <Suspense fallback={'...loading'}><LazyBacket/></Suspense>
        },
        {
            
            element:  <InfoContainer/>,
            index: true
        },
        {
            path: '/order',
            element: <Suspense fallback={'...loading'}><LazyOrder/></Suspense>
        }
      ]
    },
    {
      path: "/admin",
      element: <Admin />,
    }
  ]);
  
container.render(
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
);
