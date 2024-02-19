import React, { useState } from "react";

function History() {
    const [history, setHistory] = useState([
        { expression: "2+2", result: "4" },
        { expression: "5*5", result: "25" },
    ])

    return (
        <div>
            <h2>Calculation History</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{`${item.expression} = ${item.result}`}</li>
                ))}
                <button onClick={() => setHistory([])}>Clear</button>
            </ul>
        </div>
    );
}

export default History;
