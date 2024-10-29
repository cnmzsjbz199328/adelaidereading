"use client";

import { Meeting } from "@/types/meeting";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const meetings: Meeting[] = [
  {
    id: 1,
    title: "The Great Gatsby Discussion",
    date: "2024-02-01",
    time: "19:00",
    location: "Virtual Meeting",
    description: "Join us for an engaging discussion about The Great Gatsby."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird Analysis",
    date: "2024-02-15",
    time: "18:30",
    location: "City Library",
    description: "An in-depth analysis of Harper Lee's masterpiece."
  }
];

export function MeetingList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {meetings.map((meeting) => (
        <Card key={meeting.id}>
          <CardHeader>
            <CardTitle>{meeting.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {meeting.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                {meeting.time}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {meeting.location}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {meeting.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}