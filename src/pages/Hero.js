import { Canvas } from "@react-three/fiber";
import { Box } from "./../components/3DComponents";

export default function Hero() {
  return (
    <div className="flex hero_container col">
      <div className="hero_copy_container items-center">
        <h2 className="hero-text text-6xl">The World is my oyster. </h2>
        <button className="px-5 py-4 mt-10 cta_button">Find out why</button>
      </div>
      <div className="canvas_wrapper">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}
