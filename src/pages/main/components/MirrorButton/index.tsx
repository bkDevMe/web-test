import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const MirrorButton = ({ children }: any) => {
  const reflectionRef = useRef<HTMLVideoElement>(null);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    if (!reflectionRef.current) return;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        const video = reflectionRef.current;
        if (video) {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
          };
        }
      })
      .catch((e) => console.log(e));
  }, [reflectionRef]);

  return (
    <div className={`button-wrap ${buttonPressed ? 'pressed' : null}`}>
      <div
        className={`button ${buttonPressed ? 'pressed' : null}`}
        onPointerDown={() => setButtonPressed(true)}
        onPointerUp={() => setButtonPressed(false)}
      >
        <video className="button-reflection" ref={reflectionRef} />
      </div>
      <div className="text">{children}</div>
    </div>
  );
};

export default MirrorButton;
