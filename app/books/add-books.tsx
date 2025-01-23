"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { wixClient } from "@/lib/wix";
import { useRouter } from "next/navigation";

import React from "react";

export const AddBooksDialog = () => {
  // const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Book</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new book</DialogTitle>
          <DialogDescription>
            If you didn&apos;t find the book you were looking for, you can add
            it here.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={async e => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const title = formData.get("title");
            const author = formData.get("author");
            const description = formData.get("description");
            const publication = formData.get("publication");
            const genre = formData.get("genre");
            const isbn = formData.get("isbn");
            const image = formData.get("image");

            const res = await wixClient.items.insert("Books", {
              title,
              author,
              description,
              publication,
              genre,
              isbn,
              image,
            });

            // router.push(`/books/${res.dataItem?._id}`);
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="title">Title</Label>
            <Input name="title" type="text" placeholder="Title" />
          </div>
          <div>
            <Label htmlFor="author">Author</Label>
            <Input name="author" type="text" placeholder="Author" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" placeholder="Description" />
          </div>
          <div>
            <Label htmlFor="publication">Publication Year</Label>
            <Input
              name="publication"
              type="number"
              placeholder="Publication Year"
            />
          </div>
          <div>
            <Label htmlFor="genre">Genre</Label>
            <Input name="genre" type="text" placeholder="Genre" />
          </div>
          <div>
            <Label htmlFor="isbn">ISBN (Optional)</Label>
            <Input name="isbn" type="text" placeholder="ISBN" />
          </div>
          <Button type="submit">Add Book</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
