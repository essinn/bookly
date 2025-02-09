import React from "react";
import { wixClient } from "@/lib/wix";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpenIcon } from "lucide-react";

export const page = async () => {
  const books = await wixClient.items
    .query("Books")
    .limit(8)
    .find()
    .then(res => res.items.map(item => item.data || item));

  return (
    <div className="px-10 py-20 md:p-20">
      <h1 className="font-bold text-3xl text-black text-center">
        Reviewed Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
        {books.map(book => (
          <div
            key={book?._id}
            className="border border-zinc-200 hover:border-zinc-400 p-2 rounded hover:shadow-md flex flex-col gap-2"
          >
            <div className="relative w-full h-64">
              {book?.image ? (
                <Image
                  src={book?.image}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              ) : (
                <div className="flex items-center justify-center flex-col gap-3 bg-zinc-100 h-full w-full rounded">
                  <BookOpenIcon className="h-8 w-8 text-black" />
                  <p className="text-black text-lg font-bold">
                    No Image Available
                  </p>
                </div>
              )}
            </div>
            <h2 className="text-lg font-medium">{book?.title}</h2>
            <p className="text-sm">{book?.author}</p>
            <Button variant={"secondary"} asChild>
              <Link href={`/books/${book?._id}`}>Reviews</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button asChild variant="secondary">
          <Link href="/books">Browse all books</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
