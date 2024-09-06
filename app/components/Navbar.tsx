import { Button } from '@/components/ui/button';
import { Mountain } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Mountain className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-blue-600">
                  TaskMaster
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/login">
                <Button variant="ghost" className="mr-2 text-black">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
