import PageController from "./controller/PageController";
import TimerUtils from "./util/TimerUtils";

import './assets/common.css';
import './assets/banner.css';
import './assets/main.css';

const init = async () => {

    await TimerUtils.sleep(500)
    document.getElementById('loading')?.remove()
    document.getElementById('banner')?.classList.add('show')

    await TimerUtils.sleep(2000)
    document.getElementById('banner')?.classList.add('cursor-pointer')
    document.getElementById('banner')?.addEventListener('click', PageController.instance.bannerScroll)
}

addEventListener('load', init)
