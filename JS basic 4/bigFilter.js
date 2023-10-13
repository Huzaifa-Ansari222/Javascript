// Create an array to store book objects with "publish year" instead of "publisher"
const books = [
    {
      name: "Book 1",
      publishYear: 2001,
      type: "Fiction",
    },
    {
      name: "Book 2",
      publishYear: 2010,
      type: "Non-fiction",
    },
    {
      name: "Book 3",
      publishYear: 1995,
      type: "Mystery",
    },
    {
      name: "Book 4",
      publishYear: 2015,
      type: "Science Fiction",
    },
    {
      name: "Book 5",
      publishYear: 2005,
      type: "Fantasy",
    },
    {
      name: "Book 6",
      publishYear: 2020,
      type: "Biography",
    },
  ];
  
  // You can access the "publishYear" of Book 1 like this:
//   console.log("Publish Year of Book 1:", books[0].publishYear);
  
  const myBooks=books.filter((bks)=>{
    //return bks.publishYear>=2000
   // return bks.publishYear>=2001 && bks.type==="Fiction"
   return bks.publishYear>=2001   || bks.type==="Fiction"

  })
  console.log(myBooks)