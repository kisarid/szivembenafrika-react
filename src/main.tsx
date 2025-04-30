import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import './i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
