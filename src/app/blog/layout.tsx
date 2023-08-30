import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BlogRootLayout({ children, ...props }: Props) {
  return (
    <div>
      blog root layout
      {children}
    </div>
  );
}
