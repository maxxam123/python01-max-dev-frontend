import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Cluster from './pages/cluster/Cluster';
//import { Link } from 'react-router-dom';

function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={
          user ? ( <Navigate replace to="/home" /> ) : ( <Register /> )}/>
        <Route path="login" element={
          user ? ( <Navigate replace to="/home" /> ) : ( <Login /> )}/>
        <Route path="/" element={
          !user ? ( <Navigate replace to="/login" />) : ( <Home /> )}/>
        <Route path="/home" element={
          !user ? ( <Navigate replace to="/login" />) : ( <Home /> )}/>
        <Route path="/cluster" element={
          !user ? ( <Navigate replace to="/login" />) : ( <Cluster /> )}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;

//         {!user ? <Route path="/home" =element{<Navigate replace to="/login" />} /> : <Route path="/home" element={<Navigate replace to="/home" />} />}

