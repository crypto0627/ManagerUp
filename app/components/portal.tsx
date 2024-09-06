import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, BarChart2, Users, Calendar } from 'lucide-react';

export default function WelcomePortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Welcome to TaskMaster
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Streamline your tasks, boost productivity, and manage your team with
          ease. Get started with ManagerUp today!
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link className="text-black" href="/learn-more">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Why Choose TaskMaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Task Management',
                icon: CheckCircle,
                description: 'Organize and prioritize tasks effortlessly',
              },
              {
                title: 'Team Collaboration',
                icon: Users,
                description: 'Work together seamlessly with your team',
              },
              {
                title: 'Progress Tracking',
                icon: BarChart2,
                description: 'Monitor project progress in real-time',
              },
              {
                title: 'Scheduling',
                icon: Calendar,
                description: 'Plan and manage your time effectively',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-blue-500 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied users and take control of your tasks
            today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                &apos;TaskMaster has transformed the way our team works.
                It&apos;s intuitive, powerful, and has significantly improved
                our productivity.&apos;
              </blockquote>
              <p className="font-semibold">
                - Sarah Johnson, Project Manager at TechCorp
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
