export function calculateScratchPercentage(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  stride: number = 16
): number {
  if (width <= 0 || height <= 0) return 0;

  try {
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    const totalPixels = pixels.length / 4;
    let clearedCount = 0;
    let sampledCount = 0;

    for (let i = 0; i < pixels.length; i += 4 * stride) {
      sampledCount++;
      const alpha = pixels[i + 3];
      if (alpha < 128) {
        clearedCount++;
      }
    }

    if (sampledCount === 0) return 0;
    return (clearedCount / sampledCount) * 100;
  } catch {
    return 0;
  }
}
