import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                Latest Updates
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            Join the Reading Club Community
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with fellow book lovers, join reading meetings, and discover your next favorite book. Share your thoughts and engage in meaningful discussions.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Join Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}