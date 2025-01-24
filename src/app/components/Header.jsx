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
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          {authenticated && (
            <Link href="/profile" className="hover:text-blue-200">Profile</Link>
          )}
        </div>
        <div>
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
    </header>
  );
}