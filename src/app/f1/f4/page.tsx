import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        {/* Will go to (..)f3 but if refresh will go to f3 */}
        <Link href="/f1/f3">F3</Link>
        {/* Will go to (...)about but if refresh will go to about */}
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
