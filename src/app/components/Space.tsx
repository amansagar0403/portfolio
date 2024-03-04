"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

interface StarProps {
  x: number;
  y: number;
}

const Star: React.FC<StarProps> = ({ x, y }) => (
  <div className={styles.star} style={{ top: y, left: x }} />
);

const Space: React.FC = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const numStars = 100;
    const newStars = Array.from({ length: numStars }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className={styles.space}>
      {stars.map((star: { x: number; y: number }, index: number) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </div>
  );
};

export default Space;
