import {FC} from "react";

type props = {
    image: string
}

export const BackgroundImage: FC<props> = (props) => {
    return (
        <div className="background-image-container" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="background-image-shadow">
            </div>
        </div>
    )
}