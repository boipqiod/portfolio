import {FC, useState} from "react";
import {Navigator} from "./Navigator";
import {MainItem} from "./item/MainItem";

export const Container: FC = () => {
    const [index, setIndex] = useState<number>(0)

    return (
        <>
            <Navigator />
            <MainItem />
        </>
    )
}