import { getServerSession } from "next-auth";
import UsernameButton from "../components/UsernameButton";

export default async function ServerActionPage() {
  async function username() {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not signed in";
  }

  return (
    <div>
      <UsernameButton usernameAction={username} />
    </div>
  );
}
