import React from "react";
import "./pass.css";

function PasswordBody() {
    return (
        <div className="passwordBox">
            <h1>React Password Generator</h1>
            <div className="cardHeader">
                <h2>Generate a Password</h2>
            </div>
            <div className="cardBody">
                <textarea readOnly id="password" placeholder="Your Secure Password" aria-label="Generate Password"></textarea>
            </div>
            <div class="cardFooter">
                <button id="generate" className="btn">Generate Password</button>
            </div>
        </div>
    );
}

export default PasswordBody;