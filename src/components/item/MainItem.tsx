import {FC} from "react";
import "../../assets/css/MainItem.css"
import {BackgroundImage} from "../BackgroundImage";

import MainImage from "../../assets/images/image_1.jpeg"

export const MainItem: FC = () => {
    return (
        <>
            <BackgroundImage image={MainImage} />
            <div className="item-container">
                <h1>안녕하세요 저는 공상헌 입니다.</h1>
            </div>
        </>
    )
}