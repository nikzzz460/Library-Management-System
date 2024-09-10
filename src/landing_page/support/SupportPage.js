import React, { useState } from 'react';

function SupportPage() {
    const [chatLog, setChatLog] = useState("Let's talk!!");
    const [userInput, setUserInput] = useState("");

    const responses = {
        "Hi": "Hello, Developers Community Here.",
        "How are you": "Good :)",
        "How to learn html": "Please visit our page w3school.com",
        "ok": "Thank You So Much <3",
        "Bye": "Okay! Will meet soon. TC:).."
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            talk();
        }
    };

    const talk = () => {
        setChatLog(userInput in responses ? responses[userInput] : "For more details please visit our page w3school.com");
        setUserInput('');
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/03/27/13/00/hands-2178566__340.jpg" alt="Background" className="img-fluid" style={{ width: '100%', height: '650px' }} />
            </div>
            <div className="box shadow p-4 rounded" style={{ width: '450px', height: '390px', position: 'absolute' }}>
                <div className="top bg-dark text-white text-center p-3 rounded-top">
                    <h1>How can we help you?</h1>
                </div>
                <div className="mid bg-light p-3">
                    <div className="chat">
                        <h2>Answer for your questions are as below...</h2>
                        <p id="chatLog" className="bg-primary text-white p-4 rounded">{chatLog}</p>
                    </div>
                </div>
                <div className="input">
                    <input
                        type="text"
                        id="userBox"
                        className="form-control"
                        placeholder="Type your Question"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        style={{ height: '70px', fontSize: '30px', backgroundColor: '#090e11', color: '#fff' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SupportPage;