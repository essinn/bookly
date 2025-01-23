import React from "react";
import { wixClient } from "@/lib/wix";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const page = async () => {
  const books = await wixClient.items
    .query("Books")
    .find()
    .then(res => res.items.map(item => item.data || item));

  return (
    <div className="px-10 py-20 md:p-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl text-black text-center">Books</h1>
        <Button asChild>
          <Link href="/add-books">Add Book</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
        {books.map(book => (
          <div
            key={book?._id}
            className="border border-zinc-200 hover:border-zinc-400 p-2 rounded hover:shadow-md flex flex-col gap-2"
          >
            <div className="relative w-full h-64">
              <Image
                src={book?.image}
                alt="image"
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <h2 className="text-lg font-medium">{book?.title}</h2>
            <p className="text-sm">{book?.author}</p>
            <Button
              className="bg-white text-black hover:bg-zinc-100 my-2"
              asChild
            >
              <Link href={`/books/${book?._id}`}>Reviews</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
