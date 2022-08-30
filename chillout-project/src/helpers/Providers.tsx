import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

interface Props {
    children: React.ReactNode
}

const Providers: FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <ToastContainer autoClose={2000} />
         {children}
      </BrowserRouter>
    </Provider>
  )
}

export default Providers