import {FC} from "react";
import {BackgroundImage} from "../BackgroundImage";
import MainImage from "../../assets/images/image_2.jpeg";

export const ProjectItem: FC = () => {
    return (
        <>
            <BackgroundImage image={MainImage} />
            <div className="item-container">
                <h1>ProjectItem</h1>
            </div>
        </>
    )
}