import { items } from '../data/items'
import { InterfaceItems } from '../interface/items'

export const DEFAULT_CLOTHES = {
    //forehead
    1: 0,
    //hat
    2: 0,
    //hair
    3: 0,
    //eyes
    4: 0,
    //face
    5: 0,
    //back
    6: 0,
    //top
    7: 0,
    //gloves
    8: 0,
    //shoes
    9: 0,
    //legs
    10: 0,
    //rod
    11: 0,
    //bicycle
    12: 0
}

export const getCosmeticSetupImage = (cosmetics) => {
    const selectedClothes = { ...DEFAULT_CLOTHES, ...cosmetics }
    const scenes = [];
    for (const key in InterfaceItems.sceneCosmeticParam) {
        if (Object.hasOwnProperty.call(InterfaceItems.sceneCosmeticParam, key)) {
            const scene = InterfaceItems.sceneCosmeticParam[key];
            scenes.push({
                name: scene,
                url: `https://a.pokemmo.net/dress-room/v1/${key}/2/1/${selectedClothes[6]}/${selectedClothes[12]}/${selectedClothes[4]}/${selectedClothes[5]}/${selectedClothes[8]}/${selectedClothes[3]}/${selectedClothes[2]}/${selectedClothes[10]}/${selectedClothes[9]}/${selectedClothes[7]}.png`
            })
        }
    }
    return scenes;
}

export const getItemInfo = id => {
    return items.find(item => parseInt(item.id) === parseInt(id))
}