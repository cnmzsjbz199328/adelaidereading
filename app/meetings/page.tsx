"use client";

import { Shell } from "@/components/shell";
import { MeetingList } from "@/components/meeting-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function MeetingsPage() {
  return (
    <Shell>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-muted-foreground">
            Browse and join upcoming book club meetings
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Meeting
        </Button>
      </div>
      <div className="mt-8">
        <MeetingList />
      </div>
    </Shell>
  );
}