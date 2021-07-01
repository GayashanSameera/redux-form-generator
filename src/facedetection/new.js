import React, { useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import { drawMesh } from "./util";

const FaceDetection = (props) => {
    //set references
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    let cocossdModel = null;
    //load facemesh
    const runFacemesh = async (data) => {
        const net = await facemesh.load({
            inputResolution: { width: 640, height: 580 },
            scale: 0.8,
        });

        setInterval(() => {
            detect(net);
        }, 1000);
    };

    //detect function
    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            //get video properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            //set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            //set canvas width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            //make detections
            const face = await net.estimateFaces(video);
            console.log("face......", face);
            //get canvas context for drawing
            const ctx = canvasRef.current.getContext("2d");
            drawMesh(face, ctx);

            // Load the model.
            cocoSsd.load().then((model) => {
                // detect objects in the image.
                model.detect(video).then((predictions) => {
                    console.log("Predictions: ", predictions);
                    ctx.font = "30px Arial";
                    ctx.fillText("Hello World", 10, 50);
                });
            });
            
        }
    };
    runFacemesh();
    return (
        <div>
            <Webcam
                ref={webcamRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 9,
                    width: 640,
                    height: 580,
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zIndex: 9,
                    width: 640,
                    height: 580,
                }}
            />
        </div>
    );
};

export default FaceDetection;
