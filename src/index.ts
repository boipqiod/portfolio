import PageController from "./controller/PageController";
import TimerUtils from "./util/TimerUtils";

import './assets/common.css';
import './assets/banner.css';
import './assets/main.css';
import AnimateController from "./controller/AnimateController";

const init = async () => {
    window.document.head.append('<meta name="viewport" content="width=device-width, initial-scale=1.0">')

    document.getElementById('loading')?.remove()
    document.getElementById('banner')?.classList.add('show')
    // AnimateController.instance.addObserveAnimation(documentßßΩΩzument.getElementById('main_1')!)

    await TimerUtils.sleep(2000)
    document.getElementById('banner')?.classList.add('cursor-pointer')
    document.getElementById('banner')?.addEventListener('click', PageController.instance.bannerScroll)
}

addEventListener('load', init)
