export const getById = <T extends HTMLElement>(id: string): T | null => {
    const ele = document.getElementById(id)
    return ele ? ele as T : null
}


export const getByTag = <T extends HTMLElement>(tag: string): T | null => {
    const ele = document.getElementsByTagName(tag)[0]
    return ele ? ele as T : null
}

export const getByQuery = <T extends HTMLElement>(query: string): T | null => {
    const ele = document.querySelector(query)
    return ele ? ele as T : null
}

export const getByQueryAll = <T extends HTMLElement>(query: string): T[] => {
    const ele = document.querySelectorAll(query)
    return ele ? Array.from(ele) as T[] : []
}

export const getByName = <T extends HTMLElement>(name: string): T | null => {
    const ele = document.getElementsByName(name)[0]
    return ele ? ele as T : null
}

//윈도우 이벤트 추가
export const setEvent = (event: string, callback: (e: Event) => void) => {
    window.addEventListener(event, callback)
}
//윈도우 이벤트 삭제
export const removeEvent = (event: string, callback: (e: Event) => void) => {
    window.removeEventListener(event, callback)
}

export const setEventById = (id: string, event: string, callback: (e: Event) => void) => {
    const ele = getById(id)
    if (ele) {
        ele.addEventListener(event, callback)
    }
}

export const setEventsByClass = (className: string, event: string, callback: (e: Event, index: number, ele: HTMLElement) => void) => {
    const eles = getByQueryAll(`.${className}`)
    console.log("eles", eles)
    eles.forEach((ele, index) => {
        ele.addEventListener(event, (e)=>{callback(e, index, ele)})
    })
}

export const addClass = (id: string, className: string) => {
    const ele = getById(id)
    if (ele) {
        ele.classList.add(className)
    }
}