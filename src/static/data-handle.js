import Data from "../static/Data.json";
import Brands from "../static/brands.json";
export function getData() {
    return Data.data;
}
export function getBrands(){
    return Brands.data
}
/**
 * 
 * @param {String} id 
 * @returns 
 */
export async function getLongText(id) {
    const item = getData().find((val) => val.id.includes(id));
    if (item === undefined) return "Error";
    return fetch(`./longText/${item.longText}`).then((res) => res.text()).then((txt) => txt).catch((err) => err)
}
//touch detail{001..009}.txt