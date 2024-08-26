/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OCbtGjbt85C
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <SchoolIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Student Manager</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Students
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Attendance
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Grades
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <PlusIcon className="h-4 w-4" />
            <span>Add Student</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <UsersIcon className="h-4 w-4" />
                  <span>Students</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <CalendarIcon className="h-4 w-4" />
                  <span>Attendance</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <FileTextIcon className="h-4 w-4" />
                  <span>Grades</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 bg-muted/40 py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Students</CardTitle>
              <CardDescription>Current enrolled students</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">1,234</div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">+5.2%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Attendance Rate</CardTitle>
              <CardDescription>Overall attendance percentage</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">92.7%</div>
              <div className="bg-green-500 text-green-50 px-3 py-1 rounded-full text-sm font-medium">+1.2%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Grades</CardTitle>
              <CardDescription>Overall student performance</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">84.3</div>
              <div className="bg-yellow-500 text-yellow-50 px-3 py-1 rounded-full text-sm font-medium">+0.5%</div>
            </CardContent>
          </Card>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4" />
              <span>View Students</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>Attendance</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <FileTextIcon className="h-4 w-4" />
              <span>Grades</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </Button>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Upcoming school events and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      May 15
                    </div>
                    <div>
                      <div className="font-medium">Parent-Teacher Conference</div>
                      <div className="text-sm text-muted-foreground">
                        Meet with teachers to discuss student progress.
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      RSVP
                    </Button>
                  </div>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Jun 5
                    </div>
                    <div>
                      <div className="font-medium">End of Year Celebration</div>
                      <div className="text-sm text-muted-foreground">
                        Join us for a fun-filled event to celebrate the end of the school year.
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      RSVP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Student Manager. All rights reserved.</div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}