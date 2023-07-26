/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  let result = '';
  const words = word.split(/[\s_-]/);
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (i === 0) {
      result += w.toLowerCase();
    } else {
      result += w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }
  }

  return result;
};
