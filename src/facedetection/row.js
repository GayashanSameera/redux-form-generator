import React from 'react';
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';
const MODEL_URL = '/models'


const FaceDetection = props => {

    const getStream = async data => {
        console.log('getStream',data);
        const {active} = data;

        if(active){
            await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
            await faceapi.loadAgeGenderModel(MODEL_URL);
            await faceapi.loadFaceExpressionModel(MODEL_URL);

            
            console.log('object',navigator.getUserMedia(
                {video:{}},
                 stream => data.srcObject = stream,
                  err => console.log(err)));
        }
    }
    return (
       <Webcam onUserMedia={getStream}/>
      )
}

export default FaceDetection;