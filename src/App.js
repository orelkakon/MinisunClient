import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Branch from './components/Branch/index'
import Machine from './components/Machine/index'
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
          {
            config.minisunTree.map((branch, index) => {
              return <Route key={index} path={`controlPanel/${branch.name.replace(" ", "")}`} element={<Branch branch={branch} />} />
            })
          }
          {
            config.minisunTree.map(branch => {
              return branch.machines.map(machine => {
                return <Route path={`controlPanel/${branch.name.replace(" ", "")}/${machine.name.replace(" ", "-")}`} element={<Machine branch={branch} />} />
              })
            })
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default LandPage;
