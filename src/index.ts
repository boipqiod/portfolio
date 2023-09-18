import PageController from "./controller/PageController";
import TimerUtils from "./util/TimerUtils";

import './assets/common.css';
import './assets/banner.css';
import './assets/main.css';
import AnimateController from "./controller/AnimateController";
import PageUtils from "./util/PageUtils";

const init = async () => {
    document.getElementById('loading')?.remove()
    document.getElementById('banner')?.classList.add('show')

    await TimerUtils.sleep(500)
    document.getElementById('banner')?.classList.add('cursor-pointer')
    await PageController.instance.init()
}

addEventListener('load', init)
