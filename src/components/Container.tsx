import {FC} from "react";
import {Navigator} from "./common/Navigator";
import {MainItem} from "./item/MainItem";
import {usePage} from "../hooks/usePage";
import {MoveButtons} from "./common/MoveButtons";
import {ProjectItem} from "./item/ProjectItem";
import {FadeItem} from "./FadeItem";

const viewList = [
    <MainItem />,
    <ProjectItem />,
    <MainItem />
]

export const Container: FC = () => {
    const {index, prev, next} = usePage(viewList.length)

    return (
        <>
            <Navigator />
            <MoveButtons
                index={index}
                length={viewList.length}
                next={next}
                prev={prev}
            />
            {viewList.map((item, i) =>
                <FadeItem show={i === index} key={i}>
                    {item}
                </FadeItem>
            )}
        </>
    )
}