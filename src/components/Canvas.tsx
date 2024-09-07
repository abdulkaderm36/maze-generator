import useCanvas from "../hooks/useCanvas";
import { DrawFunction } from "../utils/types";

interface CanvasProps {
    draw: DrawFunction;
}

const Canvas = ({draw}: CanvasProps) => {
    const canvasRef = useCanvas(draw)
    return <canvas ref={canvasRef} />
};

export default Canvas
