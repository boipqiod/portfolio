import {useState} from "react";

export const usePage = (length: number) => {
    const [index, setIndex] = useState<number>(0)

    //뒤로가기
    const prev = () =>{
        if(index <= 0) alert("뒤로 갈 수 없습니다.")
        else setIndex(index-1)
    }

    //앞으로가기
    const next = () =>{
        if(index >= length-1) alert("앞으로 갈 수 없습니다.")
        else setIndex(index+1)
    }

    return {
        index, setIndex,

        prev, next,
    }
}