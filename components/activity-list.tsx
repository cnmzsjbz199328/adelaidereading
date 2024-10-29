"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, MessageCircle, Calendar } from "lucide-react";

type Activity = {
  id: number;
  type: "comment" | "meeting" | "book";
  title: string;
  description: string;
  date: string;
};

const activities: Activity[] = [
  {
    id: 1,
    type: "comment",
    title: "Commented on 'The Great Gatsby'",
    description: "A fascinating perspective on the American Dream...",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "meeting",
    title: "Joined Book Club Meeting",
    description: "Monthly discussion on contemporary literature",
    date: "1 day ago",
  },
  {
    id: 3,
    type: "book",
    title: "Added new book",
    description: "Added 'To Kill a Mockingbird' to reading list",
    date: "3 days ago",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "comment":
      return <MessageCircle className="h-4 w-4" />;
    case "meeting":
      return <Calendar className="h-4 w-4" />;
    case "book":
      return <Book className="h-4 w-4" />;
  }
};

export function ActivityList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <div className="mt-1">{getActivityIcon(activity.type)}</div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}