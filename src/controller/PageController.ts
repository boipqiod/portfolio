import PageUtils from "../util/PageUtils";

export default class PageController {
    static instance = new PageController()
    private isScrolled = false

    private constructor() { }

    async bannerScroll() {
        if (this.isScrolled) return
        await PageUtils.smoothScrollWindow(0, innerHeight, 500)
        document.getElementById('banner-container')?.remove()
        document.body.style.overflow = ''
        this.isScrolled = true
    }
}