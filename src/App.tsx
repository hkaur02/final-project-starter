import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Hello World
                </p>
            </header>
        </div>
    );
}

export default App;
