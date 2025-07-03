import Data from "../static/Data.json";

export function getData() {
    return Data.data;
}
/**
 * 
 * @param {String} id 
 * @returns 
 */
export async function getLongText(id) {
    const item = getData().find((val) => val.id.includes(id));
    if (item === undefined) return "Error";
    return fetch(`src/static/longText/${item.longText}`).then((res) => res.text()).then((txt) => txt).catch((err) => err)
}
//touch detail{001..009}.txt