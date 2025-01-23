"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { wixClient } from "@/lib/wix";
import { useToast } from "@/hooks/use-toast";

export default function ReviewForm({ bookId }: { bookId: string }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await wixClient.items.insert("Reviews", {
      bookId: bookId,
      name: name,
      rating: rating,
      review: review,
    });
    console.log(res);

    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });

    // reset form fields
    setName("");
    setRating("");
    setReview("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="rating">Rating (1-5)</Label>
        <Input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={e => setRating(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="review">Your Review</Label>
        <Textarea
          id="review"
          value={review}
          onChange={e => setReview(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Submit Review</Button>
    </form>
  );
}
