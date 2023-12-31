"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HamburgerMenuIcon as Menu,
  Cross1Icon as X,
} from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./theme-toggler";
import { Card } from "./ui/card";
export default function MobileNav({ session }: { session: any }) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <>
      <Button
        aria-label="menu toggle"
        variant={"ghost"}
        size={"icon"}
        className="flex items-center justify-center w-12 h-10 p-2 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>
      {/* mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="fixed right-0 w-full h-full mx-auto p-0 transition-[background-color] duration-200 py-2 md:hidden bg-background top-16 z-30"
          >
            <div className="flex flex-col items-center justify-start max-w-xs px-2 py-4 pt-6 pb-24 mx-auto">
              <Link
                onClick={() => setOpen(false)}
                className="text-[0.975rem] w-full border-b dark:border-[#52525952] pt-4 pb-[11px] transition-colors duration-200 ease-in-out hover:text-orange-500 font-medium"
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="text-[0.975rem] w-full border-b dark:border-[#52525952] pt-4 pb-[11px] transition-colors duration-200 ease-in-out hover:text-orange-500 font-medium"
                href="#about"
              >
                About
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="text-[0.975rem] w-full border-b dark:border-[#52525952] pt-4 pb-[11px] transition-colors duration-200 ease-in-out hover:text-orange-500 font-medium"
                href="mailto:moha@elguarir.com"
              >
                Contact
              </Link>
              {session ? (
                <div className="flex items-center w-full mt-4 space-x-2">
                  <Link
                    href="/dashboard"
                    className={cn(
                      buttonVariants({ size: "default", variant: "default" }),
                      "flex-1"
                    )}
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center w-full mt-4 space-x-2">
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ size: "default", variant: "outline" }),
                      "flex-1"
                    )}
                  >
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/signup"
                    className={cn(
                      buttonVariants({ size: "default", variant: "default" }),
                      "flex-1"
                    )}
                  >
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
              <Card className="flex items-center justify-between w-full px-2 py-1 pl-3 mt-4 bg-card/60">
                <span className="text-sm font-medium">Appearence</span>
                <ModeToggle className="w-8 h-8" />
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
