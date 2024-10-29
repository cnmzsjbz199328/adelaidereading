import { Suspense } from "react";
import { BookList } from "@/components/book-list";
import { MeetingList } from "@/components/meeting-list";
import { Shell } from "@/components/shell";

export default function Home() {
  return (
    <Shell>
      <div className="space-y-8">
        <section>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">
              Upcoming Meetings
            </h2>
            <p className="text-muted-foreground">
              Join our next book club meetings
            </p>
          </div>
          <div className="mt-6">
            <Suspense fallback={<div>Loading meetings...</div>}>
              <MeetingList />
            </Suspense>
          </div>
        </section>

        <section>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">
              Featured Books
            </h2>
            <p className="text-muted-foreground">
              Discover our current reading list
            </p>
          </div>
          <div className="mt-6">
            <Suspense fallback={<div>Loading books...</div>}>
              <BookList />
            </Suspense>
          </div>
        </section>
      </div>
    </Shell>
  );
}