import TimerUtils from "../util/TimerUtils";

export default class PageController {
    static instance = new PageController();
    private constructor() {
    }

    init = async () => {
        await this.removeLoading()
        this.initProjectPage()
        await this.initMainPage()
    }

     removeLoading = async () => {
        document.getElementById('loading')?.classList.add('hidden')
        await TimerUtils.sleep(1000)
        document.getElementById('loading')?.remove()
    }

    initProjectPage = () => {
        document.getElementById('project-list')?.addEventListener('mouseover', (e) => {
            console.log('mouseover')
            window.addEventListener('wheel', this.projectMouseEventHandler, { passive: false })
        })
        document.getElementById('project-list')?.addEventListener('mouseout', (e) => {
            console.log('mouseout')
            window.removeEventListener('wheel', this.projectMouseEventHandler)
        })
    }
    projectMouseEventHandler = (e: WheelEvent) => {
        const projectList = document.getElementById('project-list') as HTMLDivElement

        const delta = e.deltaY

        const currentScroll = projectList?.scrollLeft
        const scrollWidth = projectList?.scrollWidth
        const clientWidth = projectList?.clientWidth
        const maxScroll = scrollWidth - clientWidth
        const scroll = currentScroll + delta
        if (scroll < 0) {
            projectList?.scrollTo(0, 0)
        }
        else if (scroll > maxScroll) {
            projectList?.scrollTo(maxScroll -1, 0)
            window.removeEventListener('wheel', this.projectMouseEventHandler)
        }
        else {
            projectList?.scrollTo(scroll, 0)
        }
        return e.preventDefault()
    }


    initMainPage = async () => {
        document.getElementById('main-info')?.classList.add('visible')
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