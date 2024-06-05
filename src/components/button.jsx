import Link from "next/link";

export default function Button({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      <button>{children}</button>
    </Link>
  );
}
