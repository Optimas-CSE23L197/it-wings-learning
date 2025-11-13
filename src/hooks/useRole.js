import useAuth from "./userAuth";

export default function useRole() {
  const { user } = useAuth();

  const role = user?.role || "guest";

  const isSuperAdmin = role === "super-admin";
  const isAdmin = role === "admin";
  const isInstructor = role === "instructor";
  const isStudent = role === "student";

  const hasRole = (requiredRole) => role === requiredRole;

  return {
    role,
    isSuperAdmin,
    isAdmin,
    isInstructor,
    isStudent,
    hasRole,
  };
}
