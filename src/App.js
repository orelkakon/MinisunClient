import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Login from './components/Login/index'
import Panel from './components/Panel/index'
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/index'

const properties = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined
}

export const notifySuccees = (msg) => {
  toast.success(msg, properties)
}

export const notifyError = (msg) => {
  toast.error(msg, properties)
}


const LandPage = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="controlPanel" element={<Panel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default LandPage;
