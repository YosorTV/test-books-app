export const booksBySameAuthor = (data = [], currentAuthor, bookId) => {
  return data.filter(({ author, id }) => {
    return bookId === id ? null : author.includes(currentAuthor) ? data : null
  });
};