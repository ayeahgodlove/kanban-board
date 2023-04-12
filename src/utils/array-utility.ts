type Item = {
  id: string;
};

/**
 * find first item index by id in array
 * @param items array of items
 * @param id to find
 * @returns index of item
 */
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item) => item.id === id);
};

/**
 * remove item from array by index
 * @param items array of items
 * @param index to remove
 * @returns new array
 */
export const removeItemAtIndex = <TItem>(items: TItem[], index: number) => {
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

/**
 * first remove item from array by index, then insert new item at index
 * @param array of items
 * @param item to insert
 * @param index to insert item
 * @returns new array
 */
export const insertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

/**
 * first remove item from array by index, then insert new item at index
 * @param array of items
 * @param from old position
 * @param to new position
 * @returns new items array
 */
export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
