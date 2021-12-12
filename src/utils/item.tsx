import { IItem } from "../@types/common";

export const sortByName = (items: Array<IItem>, desc: boolean): Array<IItem> => {
    const sortedItems = [ ...items ];
    sortedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
    if (desc) {
        sortedItems.reverse();
    }
    return sortedItems;
};

export const getFilteredItems = (items: Array<IItem>, search: string): Array<IItem> => {
    if (search) {
        return items.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
    }
    return items;
};
