import React from 'react';
import Home from "./pages/home/Home";
import PromptMain from "./pages/prompt/PromptMain";
import EvaluationMain from "./pages/evaluation/EvaluationMain";
import DataMain from "./pages/data/DataMain";
import NotFound from "./pages/error/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/base.scss'

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prompt" element={<PromptMain />} />
            <Route path="/evaluation" element={<EvaluationMain />} />
            <Route path="/data" element={<DataMain />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
