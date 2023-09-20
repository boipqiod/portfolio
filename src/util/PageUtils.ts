export default class PageUtils {
    static smoothScrollWindow = (targetX: number, targetY: number, duration: number): Promise<void> => {

        document.body.style.overflow = 'auto';

        const startX = window.scrollX;
        const startY = window.scrollY;
        const distanceX = targetX - startX;
        const distanceY = targetY - startY;
        const startTime = performance.now();

        if (duration === 0) {
            window.scrollTo({
                left: startX,
                top: startY
            });
            return Promise.resolve()
        }

        return new Promise((resolve) => {
            const animationFrame = (time: number) => {
                let timeFraction = (time - startTime) / duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }
                const newX = startX + distanceX * timeFraction;
                const newY = startY + distanceY * timeFraction;
                window.scrollTo({
                    left: newX,
                    top: newY
                });

                if (timeFraction < 1) {
                    requestAnimationFrame(animationFrame);
                } else {
                    window.scrollTo({
                        left: targetX,
                        top: targetY
                    });
                    document.body.style.overflow = 'hidden';
                    resolve();
                }
            };

            requestAnimationFrame(animationFrame);
        });
    };

}
