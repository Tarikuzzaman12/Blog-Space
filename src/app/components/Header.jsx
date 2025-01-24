import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Left Section: Website Name */}
        <div>
          <Link href="/" className="text-xl font-bold hover:text-blue-200">
            Blog Space
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          {authenticated && (
            <Link href="/profile" className="hover:text-blue-200">
              Profile
            </Link>
          )}
        </div>

        {/* Right Section: Authentication */}
        <div className="flex items-center space-x-4">
          {authenticated ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.given_name}</span>
              <LogoutLink className="bg-red-500 px-3 py-1 rounded">
                Logout
              </LogoutLink>
            </div>
          ) : (
            <LoginLink className="bg-green-500 px-3 py-1 rounded">
              Login
            </LoginLink>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-4">
        <div className="space-y-2">
          <Link href="/" className="block text-blue-200">
            Home
          </Link>
          {authenticated && (
            <Link href="/profile" className="block text-blue-200">
              Profile
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
