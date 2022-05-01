import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Locations from "./../src/pages/Locations"
import AddLocation from "./../src/pages/AddLocation"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
console.log("hello")
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='locations/addLocation' element={<AddLocation />} />
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
