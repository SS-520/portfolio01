import React from 'react';
import ReactDOM from 'react-dom/client';

import './common/common.css';
import './index.css';
import './common/loading.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
// import Loading from 'component/Loading';
import { Menu } from "./contents/Menu";
import { Management } from "./contents/Management";
import { EventList } from "./contents/EventList";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/EventList" element={<EventList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    {/* <Loading /> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
