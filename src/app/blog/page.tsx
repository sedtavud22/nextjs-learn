import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // absolute == ignore template
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
    </div>
  );
}
