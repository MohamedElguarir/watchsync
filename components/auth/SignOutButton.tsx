"use client";
import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
export default function SignOutButton() {
  const router = useRouter();

  return (
    <DropdownMenuItem asChild className="w-full">
      <button
        onClick={async () => {
          toast.promise(
            signOut(),
            {
              loading: "Signing out...",
              success: "Signed out!",
              error: "Error signing out",
            },
            {
              style: {
                minWidth: "250px",
              },
              className: "dark:bg-muted dark:text-orange-50",
              position: "bottom-center",
            }
          );
          router.push("/login");
        }}
      >
        <svg
          className="w-[1.1rem] h-[1.1rem] fill-foreground mr-2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 20C11 19.4477 11.4477 19 12 19L15.2 19C16.0566 19 16.6389 18.9992 17.089 18.9624C17.5274 18.9266 17.7516 18.8617 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C18.8617 17.7516 18.9266 17.5274 18.9624 17.089C18.9992 16.6389 19 16.0566 19 15.2L19 8.8C19 7.94342 18.9992 7.36113 18.9624 6.91104C18.9266 6.47262 18.8617 6.24842 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.7516 5.1383 17.5274 5.07337 17.089 5.03755C16.6389 5.00078 16.0566 5 15.2 5L12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3L15.2413 3C16.0463 2.99999 16.7106 2.99998 17.2518 3.04419C17.8139 3.09012 18.3306 3.18868 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66937 20.9099 6.18608 20.9558 6.74817C21 7.28937 21 7.95374 21 8.75872V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H12C11.4477 21 11 20.5523 11 20Z"
          />
          <path d="M7.70711 14.2929C8.09763 14.6834 8.09763 15.3166 7.70711 15.7071C7.31658 16.0976 6.68342 16.0976 6.29289 15.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289C8.09763 8.68342 8.09763 9.31658 7.70711 9.70711L6.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H6.41421L7.70711 14.2929Z" />
        </svg>
        <span>Sign out</span>{" "}
      </button>
    </DropdownMenuItem>
  );
}
