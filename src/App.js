import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Branch from './components/Branch/index'
import Login from './components/Login/index'
import Panel from './components/Panel/index'
import Footer from './components/Footer/index'
import 'react-toastify/dist/ReactToastify.css';
import config from './config.json'

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
          <Route path="controlPanel/TelAviv" element={<Branch branch={config.minisunTree[0]}/>} />
          <Route path="controlPanel/Yavne" element={<Branch branch={config.minisunTree[1]}/>} />
          <Route path="controlPanel/BeitShemesh" element={<Branch branch={config.minisunTree[2]}/>} />
          <Route path="controlPanel/Rehovot" element={<Branch branch={config.minisunTree[3]}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default LandPage;
