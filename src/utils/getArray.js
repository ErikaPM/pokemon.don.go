import getData from "./getData"

const getArray = async ()=> {
    const allItems = []
    for (let i = 1; i <= 30; i++) {
        const item =  await getData(i)
        allItems.push(item)
    }
    return allItems;
}

export default getArray