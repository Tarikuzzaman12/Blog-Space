import { checkAuthentication } from "@/lib/auth";

export default async function ProfilePage() {
  await checkAuthentication();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold">Welcome to Your Profile!</h1>
        
      </div>
    </div>
  );
}