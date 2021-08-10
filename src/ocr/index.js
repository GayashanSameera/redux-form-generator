import React, { useRef } from "react";
import Webcam from "react-webcam";

import Tesseract from 'tesseract.js';

// import { createWorker } from "tesseract.js";

// import { createWorker, createScheduler } from "tesseract.js";
// const scheduler = createScheduler();

import ocr from "./ocr.png";

const Ocr = (props) => {
    //set references
    // const webcamReference = useRef(null);


    // const canvasReference = useRef(null);



    // let timerId = null;
    // //load facemesh

    // const runOcr = async (data) => {
    //     for (let i = 0; i < 4; i++) {
    //         const worker = createWorker();
    //         await worker.load();
    //         await worker.loadLanguage("eng");
    //         await worker.initialize("eng");

    //         scheduler.addWorker(worker);
    //     }
    //     doOCR();
    //     timerId = setInterval(executeRecognition, 1000);
    // };

    // const executeRecognition = async (video) => {
    //     canvasReference.current.width = 640;
    //     canvasReference.current.height = 360;

    //     canvasReference.current.getContext("2d").drawImage(video, 0, 0, 640, 360);
    //     const {
    //         data: { text },
    //     } = await scheduler.addJob("recognize", canvasReference.current);
    //     console.log(text);
    // };

    // const doOCR = async () => {
    //     if (
    //         typeof webcamReference.current !== "undefined" &&
    //         webcamReference.current !== null &&
    //         webcamReference.current.video.readyState === 4
    //     ) {
    //         //get video properties
    //         const video = webcamReference.current.video;
    //         const videoWidth = webcamReference.current.video.videoWidth;
    //         const videoHeight = webcamReference.current.video.videoHeight;

    //         //set canvas width
    //         canvasReference.current.width = videoWidth;
    //         canvasReference.current.height = videoHeight;

    //         canvasReference.current.getContext("2d").drawImage(video, 0, 0, videoWidth, videoHeight);
    //         const start = new Date();
    //         const {
    //             data: { text },
    //         } = await scheduler.addJob("recognize", canvasReference.current);
    //         const end = new Date();

    //         text.split("\n").forEach((line) => {
    //             console.log("line=============>", line);
    //         });
    //     }
    // };

      const runPrimaryImage = async () => {
        Tesseract.recognize(
            ocr,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            console.log(text);
          })
      }

    // const worker = createWorker({
    //     logger: (m) => console.log(m),
    // });

    // const runPrimaryImage = async (image) => {
    //     await worker.load();
    //     await worker.loadLanguage("eng");
    //     await worker.initialize("eng");
    //     const {
    //         data: { text },
    //     } = await worker.recognize(ocr);
    //     console.log(text);
    //     await worker.terminate();
    // };

    runPrimaryImage();
    return (
        <div>
            <Webcam
                // ref={webcamReference}
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
            <img src="../eng_bw.png" alt="Girl in a jacket" width="500" height="600" />


            <canvas
                // ref={canvasReference}
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

export default Ocr;
