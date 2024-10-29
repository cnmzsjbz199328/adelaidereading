"use client";

import { Shell } from "@/components/shell";
import { BookList } from "@/components/book-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function BooksPage() {
  return (
    <Shell>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Books</h1>
          <p className="text-muted-foreground">
            Browse and discover our reading collection
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>
      <div className="mt-8">
        <BookList />
      </div>
    </Shell>
  );
}