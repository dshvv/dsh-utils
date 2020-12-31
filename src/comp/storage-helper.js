export const getStorage = (key)=>{
    const resStr = localStorage.getItem(key);
    return JSON.parse(resStr);
}