import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.013;
    mesh.current.rotation.x += 0.011;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[3, 3, 3, 9, 9, 9]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "white"}
        wireframe={true}
      />
    </mesh>
  );
}