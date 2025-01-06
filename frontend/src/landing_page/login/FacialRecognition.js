import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const FacialRecognition = () => {
    const [result, setResult] = useState("");
    const [webcamImage, setWebcamImage] = useState(null);
    const [databaseCount, setDatabaseCount] = useState(0);

    useEffect(() => {
        // Fetch the count of images in the database when the component mounts
        const fetchDatabaseCount = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/api/database-count");
                setDatabaseCount(response.data.count);
            } catch (error) {
                console.error("Error fetching database count:", error);
            }
        };

        fetchDatabaseCount();
    }, []);

    const handleWebcamCapture = async () => {
        try {
            const video = document.createElement("video");
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();

            const canvas = document.createElement("canvas");

            setTimeout(() => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext("2d");
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                const imageData = canvas.toDataURL("image/png").split(",")[1]; // Base64 without prefix
                setWebcamImage(imageData);

                // Stop the video stream
                stream.getTracks().forEach(track => track.stop());
                video.srcObject = null;
            }, 1000);
        } catch (error) {
            console.error("Error accessing webcam:", error);
            setResult("Failed to capture image from webcam");
        }
    };

    const handleWebcamSubmit = async () => {
        if (!webcamImage) {
            setResult("No webcam image to submit");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/api/webcam", { image: webcamImage }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setResult(response.data.match ? `Match Found: ${response.data.match}` : "No Match Found");
        } catch (error) {
            console.error("Error submitting webcam image:", error);
            setResult("An error occurred while processing the webcam image");
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Facial Recognition System</h1>

            <div className="card shadow p-4">
                <h2 className="text-center mb-3">Capture from Webcam</h2>
                <button className="btn btn-secondary w-100 mb-3" onClick={handleWebcamCapture}>Capture Image</button>
                {webcamImage && (
                    <div className="text-center mb-3">
                        <img src={`data:image/png;base64,${webcamImage}`} alt="Webcam Capture" className="img-fluid" />
                    </div>
                )}
                <button className="btn btn-primary w-100" onClick={handleWebcamSubmit}>Submit Webcam Image</button>
            </div>

            {result && (
                <div className="mt-4 alert alert-info text-center">
                    {result}
                </div>
            )}

            <div className="mt-4 text-center">
                <h5>Database Images Count: {databaseCount}</h5>
            </div>
        </div>
    );
};

export default FacialRecognition;