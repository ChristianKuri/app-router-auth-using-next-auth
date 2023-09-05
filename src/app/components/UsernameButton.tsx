"use client";

import { useState } from "react";

export default function UsernameButton({ usernameAction }: { usernameAction: () => Promise<string> }) {
  const [username, setUsername] = useState<string>();

  return (
    <div>
      <button
        onClick={async () => {
          setUsername(await usernameAction());
        }}
      >
        Get Username
      </button>
      {username && <p>Username: {username} </p>}
    </div>
  );
}
