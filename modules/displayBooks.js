const displayBooks = (book, index) => {
  const content = `
      <tr class="tableRow">
          <td>"${book.title}" by ${book.author} </td>   
          <td><button id ="delete${index}">Remove</button></td>
      </tr>
      `;
  return content;
};

export default displayBooks;