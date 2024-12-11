import React, { useRef, useEffect } from "react";

const CoordinateVisualizer = ({ photo, coordinates }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = photo;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Draw coordinates
      coordinates.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
      });
    };
  }, [photo, coordinates]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CoordinateVisualizer;
