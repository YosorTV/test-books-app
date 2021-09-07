const cutPrefixRegExp =(string = '') => string.replace(/^(Mr.|Ms.|Mrs.|Dr.|Prof.)\.?\s/i, '');

export const booksBySameAuthor = (data = [], currentAuthor, bookId) => {
const name = cutPrefixRegExp(currentAuthor);
  return data?.filter(({ author, id }) => {
    return bookId === id ? null : author?.includes(name) ? data : null
  });
};