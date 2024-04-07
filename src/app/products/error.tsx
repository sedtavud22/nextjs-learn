"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div className="text-red-600">{error.message}</div>
      <button onClick={reset} className="p-2 border">
        Try again
      </button>
    </>
  );
}
