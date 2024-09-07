export const resizeCanvasToScreen = (
    canvas: HTMLCanvasElement,
) => {
    const { height, width } = document.documentElement.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio = 1 } = window;
        const context = canvas.getContext('2d')
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;

        context?.scale(devicePixelRatio, devicePixelRatio);
    }
};
