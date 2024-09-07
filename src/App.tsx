import Canvas from "./components/Canvas";
import { DrawFunction } from "./utils/types";

function App() {
    const draw: DrawFunction = (context, frameCount) => {
        // nop
    }
    return <Canvas draw={draw} />;
}

export default App;
