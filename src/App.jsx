import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Calculator } from "./components/Calculator";


function App() {
  return (
    <div className="body">
      <Calculator></Calculator>
    </div>
  )
}

export default App
