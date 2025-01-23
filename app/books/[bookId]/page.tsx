import React from "react";
import { wixClient } from "@/lib/wix";
import { BookOpen, Star } from "lucide-react";
import ReviewForm from "@/components/review-form";

export const page = async ({ params }: { params: { bookId: string } }) => {
  const book = await wixClient.items.get("Books", params.bookId);

  const reviews = await wixClient.items
    .query("Reviews")
    .eq("bookId", params.bookId)
    .find();

  return (
    <div className="container mx-auto px-10 py-20 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{book?.title}</h1>
          <p className="text-xl mb-2">by {book?.author}</p>
          <p className="text-gray-600 mb-4">
            <span>Published in </span>
            {book?.publication ?? "N/A"}
          </p>
          <p className="mb-6">{book?.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          {reviews?.items.length > 0 ? (
            reviews?.items.map((review: any) => (
              <div key={review._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">{review.rating}/5</span>
                  <span className="ml-2 text-gray-600">by {review.name}</span>
                </div>
                <p>{review.review}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet for this book.</p>
          )}
        </div>

        <div>
          <div className="sticky top-4">
            <div className="mb-6 p-4 bg-blue-100 rounded-lg flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
              <span className="font-semibold">Now accepting reviews!</span>
            </div>
            <ReviewForm bookId={book?._id ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
