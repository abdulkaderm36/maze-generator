import Canvas from "./components/Canvas";
import { DrawFunction } from "./utils/types";

function App() {
    const draw: DrawFunction = (ctx, frameCount) => {
        if (ctx) {
            ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx?.beginPath();
        }
    };
    return <Canvas draw={draw} />;
}

export default App;
