import PageUtils from "../util/PageUtils";
import TimerUtils from "../util/TimerUtils";

export default class PageController {
    static instance = new PageController()

    private constructor() { }

    async init(){
        document.getElementById('banner')?.addEventListener('click', PageController.instance.bannerScroll)
        document.getElementById('main-more')?.addEventListener('click', PageController.instance.introduceScroll)
        document.getElementById('main-introduce-back')?.addEventListener('click', PageController.instance.introduceScrollBack)
        document.getElementById('main-introduce-next')?.addEventListener('click', PageController.instance.workingHistoryScroll)
        document.getElementById('main-history-back')?.addEventListener('click', PageController.instance.workingHistoryScrollBack)
    }

    async bannerScroll() {
        await PageUtils.smoothScrollWindow(0, 0, 1)
        document.getElementById('banner-container')?.classList.add('relative')
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
        document.getElementById('main-more')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-next')?.classList.add('visible')

      }

    async introduceScroll() {
        await PageUtils.smoothScrollWindow(innerWidth,0, 500)
        document.getElementById('main-introduce-description-1')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-introduce-description-2')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-introduce-description-3')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-introduce-description-4')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-introduce-back-navi')?.classList.add('visible')
        await TimerUtils.sleep(200)
    }
    async introduceScrollBack() {
        await PageUtils.smoothScrollWindow(0,0, 500)
        document.getElementById('main-introduce-description-1')?.classList.remove('visible')
        document.getElementById('main-introduce-description-2')?.classList.remove('visible')
        document.getElementById('main-introduce-description-3')?.classList.remove('visible')
        document.getElementById('main-introduce-description-4')?.classList.remove('visible')
        document.getElementById('main-introduce-back-navi')?.classList.remove('visible')
    }

    async workingHistoryScroll() {
        await PageUtils.smoothScrollWindow(innerWidth * 2,0, 500)
        document.getElementById('main-history-description-1')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-history-description-2')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-history-description-3')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-history-description-4')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-history-description-5')?.classList.add('visible')
        await TimerUtils.sleep(200)
        document.getElementById('main-history-back-navi')?.classList.add('visible')
    }
    async workingHistoryScrollBack() {
        await PageUtils.smoothScrollWindow(innerWidth * -2,0, 500)
    }



}
