import React from "react";
import { wixClient } from "@/lib/wix";

export const page = async () => {
  const books = await wixClient.items
    .query("Books")
    .find()
    .then(res => res.items.map(item => item.data || item));
  console.log(books);

  return (
    <div className="mx-20 my-20">
      <h1 className="font-bold text-3xl text-black py-10 text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
        {books.map(book => (
          <div
            key={book?._id}
            className="border border-zinc-200 hover:border-zinc-400 p-2 rounded hover:shadow-md flex flex-col gap-2"
          >
            <h2 className="text-lg font-medium">{book?.title}</h2>
            <p className="text-sm">{book?.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
