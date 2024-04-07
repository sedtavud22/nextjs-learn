import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}) {
  const isLoggedIn = false;

  // every layout slots can have its own loading, error state
  return isLoggedIn ? (
    <div>
      {/* complex-dashboard/@children/page.tsx */}
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
