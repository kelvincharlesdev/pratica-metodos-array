import { Ientrydata, PageItems } from '../types/Ientrydata';

/**
 * extractItemsPaginateArray
 * @description
 * Extracts the items from the pages array
 * and returns an array of PageItems
 *
 * @param {Ientrydata} data
 * @return {*}  {PageItems[]}
 */
export const extractItemsPaginateArray = (data: Ientrydata): PageItems[] => {
  const { pages } = data;
  const allValues = [];

  for (const properties of pages) {
    for (const itemsPages of properties.items) {
      allValues.push(itemsPages);
    }
  }
  return allValues;
};
