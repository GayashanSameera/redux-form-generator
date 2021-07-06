import React, { useRef } from "react";
import Webcam from "react-webcam";

import Tesseract from 'tesseract.js';

// createWorker, createScheduler, 
// const scheduler = createScheduler();

const Ocr = (props) => {
    //set references
    const webcamReference = useRef(null);
    const canvasReference = useRef(null);

    // let timerId = null;
    // //load facemesh
    // const runOcr = async (data) => {
    //     for (let i = 0; i < 4; i++) {
    //         const worker = createWorker();
    //         await worker.load();
    //         await worker.loadLanguage('eng');
    //         await worker.initialize('eng');
    //         scheduler.addWorker(worker);
    //       }
    //     doOCR()
    //       timerId = setInterval(doOCR, 1000);
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
    //         const { data: { text } } = await scheduler.addJob('recognize', canvasReference.current);
    //         const end = new Date();

    //         text.split('\n').forEach((line) => {
    //             console.log('line=============>',line);
    //           });
    //     };
    //   };

      const runPrimaryImage = async () => {
        Tesseract.recognize(
            'https://tesseract.projectnaptha.com/img/eng_bw.png',
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            console.log(text);
          })
      }
      runPrimaryImage();
    return (
        <div>
            <Webcam
                ref={webcamReference}
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
                ref={canvasReference}
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
