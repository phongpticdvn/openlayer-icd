'use client'

import { Button } from "@mui/material";

export default function Signup() {
  const params = {
    email: "email1@gmail.com"
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="contained">Sign In</Button>
    </main>
  );
}
