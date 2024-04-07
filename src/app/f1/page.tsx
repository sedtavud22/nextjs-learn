import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        {/* Will go to (.)f2 but if refresh will go to f2 */}
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
