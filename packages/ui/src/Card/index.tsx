import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import CardProps from "./card.props";

export function Card({
  className,
  children
}: CardProps): JSX.Element {
  return (
   <div className={twMerge("w-full flex-1 bg-white rounded-md border border-gray-200 p-8",className)}>
      {children}
   </div>
  );
}
