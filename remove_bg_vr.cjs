const Jimp = require('jimp');

async function processImage() {
    try {
        const image = await Jimp.read('C:\\Users\\Admin\\.gemini\\antigravity\\brain\\56cfaa27-b968-4445-988a-925f91a16540\\glassmorphic_vr_education_icon_1776166470682.png');
        
        const bgInt = image.getPixelColor(10, 10);
        const bgRGBA = Jimp.intToRGBA(bgInt);
        console.log("Background color:", bgRGBA);

        const targetR = bgRGBA.r;
        const targetG = bgRGBA.g;
        const targetB = bgRGBA.b;
        
        const threshold = 65; 

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
            const r = image.bitmap.data[idx + 0];
            const g = image.bitmap.data[idx + 1];
            const b = image.bitmap.data[idx + 2];
            const a = image.bitmap.data[idx + 3];

            const dist = Math.sqrt(
                Math.pow(r - targetR, 2) + Math.pow(g - targetG, 2) + Math.pow(b - targetB, 2)
            );

            if (dist < threshold) {
                image.bitmap.data[idx + 3] = 0;
            } else if (dist < threshold + 40) {
                const alphaFactor = (dist - threshold) / 40;
                image.bitmap.data[idx + 3] = a * alphaFactor;
            }
        });

        await image.writeAsync('c:\\Users\\Admin\\Downloads\\IT career projects\\cv.rosi\\public\\vr-education-icon.png');
        console.log("Done VR BG removal");
    } catch (e) {
        console.error(e);
    }
}

processImage();
