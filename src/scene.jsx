import react, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Kevin } from './Kevin';

gsap.registerPlugin(ScrollTrigger);

import { div } from 'three/tsl';

const Scene = ({ progress }) => {
    const cameraRef = useRef(null);
    useFrame(() => {
        // console.log("Camera position:", cameraRef.current.position);
        cameraRef.current.lookAt(0, 0, 0)
    })

    useEffect(() => {

        const updateCamPos = () => {
            const position = [[-2.6, 0.2, 2.3],[2.8, 0.2, 2.3], [0, 3, 0.2], [0.4, -2.2, 0], [0, 2.5, 3.6]];

            if (progress >= 1) {

                gsap.to(cameraRef.current.position, {
                    x: 0,
                    y: 2.5,
                    z: 3.6,
                    duration: 0.1,
                    ease: 'power1.out',
                });
            } else {
                const segmentProgress = 1 / 4;

                const segmentIndex = Math.floor(progress / segmentProgress);
                console.log("Segment Index:", segmentIndex);
                const percentage = (progress % segmentProgress) / segmentProgress;
                console.log("Percentage:", percentage);
                const [startX, startY, startZ] = position[segmentIndex];
                const [endX, endY, endZ] = position[segmentIndex + 1];
                const x = startX + (endX - startX) * percentage;
                const y = startY + (endY - startY) * percentage;
                const z = startZ + (endZ - startZ) * percentage;

                gsap.to(cameraRef.current.position, {
                    x,
                    y,
                    z,
                    duration: 0.1,
                    ease: 'power1.out',
                });
            }

        };
        updateCamPos();
    }, [progress, cameraRef.current])

    return (
        <>

            {/* <OrbitControls/> */}

            <PerspectiveCamera ref={cameraRef} fov={65} near={0.1} far={10000} makeDefault
                position={[0, 0, 0]}
            // // position={[0, 3, 0.2]} 
            // position={[0.4, -2.2, 0]} 
            // position={[0, 2.5, 3.6]} 


            />
            <Environment preset="city" />
            <Kevin />
            <axesHelper args={[500]} />
        </>
    )
}


export default Scene;   