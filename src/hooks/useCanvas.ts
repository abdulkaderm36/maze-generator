import { useCallback, useEffect, useRef } from "react";
import { DrawFunction } from "../utils/types";
import { resizeCanvasToScreen } from "../utils/helpers";

const useCanvas = (draw: DrawFunction) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            resizeCanvasToScreen(canvas);
        }
    }, [canvasRef]);

    useEffect(() => {
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, [resizeCanvas]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas ? canvas.getContext("2d") : null;

        let frameCount = 0;
        let animationFrameId: number;
        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => window.cancelAnimationFrame(animationFrameId);
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
