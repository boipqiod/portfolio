import {sleep} from "../util/TimerUtils";
import {addClass, getById, getByQueryAll, setEventById, setEventsByClass} from "../util/DomUtils";

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
        addClass('loading', 'hidden')
        document.getElementById('loading')?.remove()
    }

    initProjectPage = () => {
        setEventsByClass('project-list-indicator-item', 'click', (e, index, ele) => {
            const items = getByQueryAll('.project-item')
            const indicators = getByQueryAll('.project-list-indicator-item')

            items.forEach((item) => {
                    item.classList.add('hidden')
                    item.classList.remove('visible')
            })
            indicators.forEach((indicator) => {
                indicator.classList.remove('active')
            })

            indicators[index].classList.add('active')
            items[index].classList.remove('hidden')
            items[index].classList.add('visible')
            window.location.href= `#project`
        })
    }

    initMainPage = async () => {

    }
}