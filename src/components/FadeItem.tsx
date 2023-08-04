import React, {FC, ReactNode, useEffect, useState} from "react";

type props = {
    show: boolean
    children: ReactNode
}

export const FadeItem: FC<props> = ({show, children}) => {
    const [isShow, setIsShow] = useState(show)

    useEffect(() => {
        if (show) setIsShow(true)
    }, [show])

    const onAnimationEnd = () => {
        if (!show) setIsShow(false)
    }

    return (
        isShow ? (
            <div
                style={{
                    animation: `${show ? "fadeIn" : "fadeOut"} 0.5s`,
                    display: `${show ? "block" : "none"}`
                }}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        ) : null
    )
}