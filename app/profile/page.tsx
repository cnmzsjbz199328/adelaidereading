"use client";

import { Shell } from "@/components/shell";
import { ProfileForm } from "@/components/profile-form";
import { ActivityList } from "@/components/activity-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <Shell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and view your activities
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <ProfileForm />
          </TabsContent>
          <TabsContent value="activity" className="space-y-4">
            <ActivityList />
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
}