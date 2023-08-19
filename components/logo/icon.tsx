import { cn } from "@/lib/utils";
import React from "react";

export default function LogoIcon({
  className,
  ...attrs
}: {
  className?: string;
  attrs?: any;
}) {
  return (
    <svg
      {...attrs}
      className={cn("w-6 block", className)}
      viewBox="0 0 113 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96.6747 0H16.3253C7.30909 0 0 7.30909 0 16.3253V96.6747C0 105.691 7.30909 113 16.3253 113H96.6747C105.691 113 113 105.691 113 96.6747V16.3253C113 7.30909 105.691 0 96.6747 0Z"
        fill="url(#paint0_linear_0_4)"
      />
      <path
        d="M49.949 37.7941C51.5824 35.0573 54.5277 33.589 57.4991 33.7019C60.4705 33.589 63.4158 35.066 65.0492 37.7941L83.0166 67.9164C85.4059 71.913 84.1027 77.0826 80.1147 79.4806C76.1181 81.8698 70.9399 80.5666 68.5506 76.57L57.4991 58.0378L46.4476 76.57C44.8229 79.2894 41.9036 80.7577 38.9409 80.6708C35.9782 80.7577 33.0676 79.2894 31.4342 76.57L13.4755 46.4476C11.0862 42.451 12.3895 37.2815 16.3861 34.8835C20.3827 32.4942 25.5609 33.7975 27.9502 37.7941L38.9496 56.2394L49.949 37.7941Z"
        fill="#F4F4F5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.506 32.3292C96.1534 32.3292 100.732 36.9079 100.732 42.5553C100.732 48.2027 96.1534 52.7814 90.506 52.7814C84.8586 52.7814 80.2798 48.2027 80.2798 42.5553C80.2798 36.9079 84.8499 32.3292 90.506 32.3292Z"
        fill="#F4F4F5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_4"
          x1="25.7261"
          y1="90.9491"
          x2="101.01"
          y2="6.6813"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.04" stop-color="#F57F2D" />
          <stop offset="0.5" stop-color="#E47225" />
          <stop offset="0.91" stop-color="#EF452C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
