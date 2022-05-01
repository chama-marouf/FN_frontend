import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
console.log("hello chama")
function App() {
    const navigate = useNavigate()
    console.log("heeeey")
    const _onClick = () => {
        console.log("here")
        navigate("/Locations")
    }

    useEffect(() => {
        console.log("hello00000")
    }, [])
    return (
        <div className='App'>
            <h1>Welcome to Fastned dashboard</h1>
            <button onClick={() => _onClick()} className='start-button'>
                Let's get started
            </button>
        </div>
    )
}

export default App
