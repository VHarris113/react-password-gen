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
            {/* <div class="cardFooter">
                <button id="generate" className="btn">Generate Password</button>
                {/* <input type="checkbox" >Uppercase Characters</input>
                <input type="checkbox">Lowercase Characters</input>
                <input type="checkbox">Symbols/Special Characters</input>
                <input type="checkbox">Numbers</input> */
            /* </div> */}
        </div>
    );
}

export default PasswordBody;