"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const { ready, authenticated } = usePrivy();
  const pathname = usePathname();

  // If privy is not ready or user is not authenticated, don't render anything
  if (!ready || !authenticated || pathname === "/") {
    return null;
  }

  return (
    <aside className="flex  h-screen flex-col justify-between bg-red-300 px-5">
      <nav className="flex flex-col items-start gap-y-4">
        <ul>
          <li>
            <Button asChild>
              <Link href="/home">Recent</Link>
            </Button>
          </li>
          <li>Find creators</li>
          <li>Notifications</li>
          <li>
            <Button variant="ghost">Wallet</Button>
          </li>
          <li>
            <Button asChild>
              <Link href="/settings">Settings</Link>
            </Button>
          </li>
        </ul>
        <p>
          <u>Memberships</u>
        </p>
        <ul>
          <li>spacemen2202</li>
          <li>highernature</li>
          <li>earthpreservarance</li>
        </ul>
      </nav>
      <div>
        {/* <CreateAccBtn />
        <UserPanel
          name={name}
          isMember={isMember}
          handleLogout={handleLogout}
        /> */}
      </div>
    </aside>
  );
}
