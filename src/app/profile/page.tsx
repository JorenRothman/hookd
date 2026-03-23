import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/features/auth";
import { requireAuth } from "@/features/auth/utils/auth";

async function signOut() {
  "use server";
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/login");
}

export default async function ProfilePage() {
  const session = await requireAuth();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p className="text-lg">{session.user.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="text-lg">{session.user.email}</p>
          </div>
          {session.user.image && (
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Image</p>
              <Image
                src={session.user.image}
                alt="Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          )}
          <form action={signOut}>
            <Button variant="destructive" className="w-full" type="submit">
              Sign out
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
