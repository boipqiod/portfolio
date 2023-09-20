import TimerUtils from "../util/TimerUtils";

export default class PageController {
    static instance = new PageController();
    private constructor() {
    }

    init = async () => {
        await this.initMainPage()
    }

    initMainPage = async () => {

        await TimerUtils.sleep(500)
        document.getElementById('main-image')?.classList.add('visible')
        await TimerUtils.sleep(500)
        document.getElementById('main-title')?.classList.add('visible')
        await TimerUtils.sleep(500)
        document.getElementById('main-description-1')?.classList.add('visible')
        await TimerUtils.sleep(500)
        document.getElementById('main-description-2')?.classList.add('visible')
        await TimerUtils.sleep(500)
        document.getElementById('main-description-3')?.classList.add('visible')
        await TimerUtils.sleep(500)
        document.getElementById('main-hashtag')?.classList.add('visible')
        await TimerUtils.sleep(500)
    }
}