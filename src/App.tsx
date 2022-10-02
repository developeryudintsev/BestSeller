import React, {useState} from 'react';
import Header from "./component/Header";
import {BestSeller} from "./component/BestSeller";
import {Route, Routes} from "react-router";
import {Products} from "./component/Products";
import {Reviews} from "./component/Reviews";

function App() {

  return (
        <div className="appContainer">
            <Header />
            <hr className="divider" />
            <Routes>
                <Route path="/" element={<BestSeller/>} />
                <Route path="/reviews" element={<Reviews/>} />
                <Route path="/:id" element={<Products/>} />
            </Routes>
    </div>
  );
}

export default App;
