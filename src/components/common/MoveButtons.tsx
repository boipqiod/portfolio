import React, {FC} from "react";

type props = {
    index: number
    length: number
    next: () => void
    prev: () => void
}

export const MoveButtons: FC<props> = (props) => {
    return (
        <div className="move-button-container">
            {
                props.index > 0 ?
                    <button
                        className="move-button"
                        onClick={props.prev}
                    >{"<"}</button> :
                    <div></div>
            }

            {
                props.index < props.length - 1 ?
                    <button
                        className="move-button"
                        onClick={props.next}
                    >{">"}</button> :
                    <div></div>
            }
        </div>
    )
}