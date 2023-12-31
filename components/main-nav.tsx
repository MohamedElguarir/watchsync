import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import LogoIcon from "./logo/icon";

export function MainNav() {
  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Contact",
      href: "mailto:moha@elguarir.com",
    },
  ];

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <LogoIcon />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center hover:text-orange-500 font-[550] transition-colors duration-300 ease-in-out text-sm text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
