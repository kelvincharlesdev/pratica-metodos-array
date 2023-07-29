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
  //passar dentro dos objetos
  // passar dentro do arrays
  // passar dentro do 2 objeto
  // extrair domente  o array de itens

  const { pages } = data;
  const allValues = [];

  for (const properties of pages) {
    for (const itemsPages of properties.items) {
      allValues.push(itemsPages);
    }
  }
  return allValues;
};
