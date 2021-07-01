import React from 'react';
import objectDetectionSketch from './ObjectDetectionSketch';

import P5Wrapper from 'react-p5-wrapper';// for drow sketches

const FaceDetection = props => {
    return (
        <P5Wrapper sketch={objectDetectionSketch} />
      )
}

export default FaceDetection;