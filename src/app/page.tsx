import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Home</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
