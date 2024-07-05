export function initCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('style', 'width: 100%; height: 100%; z-index: 1000; background: red;');

    return canvas;
}