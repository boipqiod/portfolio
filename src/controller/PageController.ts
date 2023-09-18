import PageUtils from "../util/PageUtils";
import TimerUtils from "../util/TimerUtils";

export default class PageController {
    static instance = new PageController()
    private isScrolled = false

    private constructor() { }

    async bannerScroll() {
        if (this.isScrolled) return
        await PageUtils.smoothScrollWindow(0, innerHeight, 500)
        document.getElementById('banner-container')?.remove()
        document.getElementById('main-image')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-title')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-description')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-hashtag')?.classList.add('visible')
        await TimerUtils.sleep(200)

        document.body.style.overflow = ''
        this.isScrolled = true
    }
}
