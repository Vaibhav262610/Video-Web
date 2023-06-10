import { useState } from 'react';
import styles from './ParallaxEffect.module.css';

const Parallex = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.nativeEvent.clientX / window.innerWidth) * 100; // Calculate the percentage of mouse position
    const y = (e.nativeEvent.clientY / window.innerHeight) * 100;
    setOffset({ x, y });
  };

  return (
    <div className={styles.parallaxContainer} onMouseMove={handleMouseMove}>
      <div className={styles.parallaxContent} style={{ transform: `translate(-${offset.x}%, -${offset.y}%)` }}>
        {/* Your content goes here */}
        <h1>Parallax Effect Example</h1>
        <p>This is some example content.</p>
      </div>
    </div>
  );
};

export default Parallex;
