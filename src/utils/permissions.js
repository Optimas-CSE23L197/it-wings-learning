// Define your role permissions
export const PERMISSIONS = {
  "super-admin": [
    "manage-admins",
    "manage-categories",
    "view-reports",
    "full-access",
  ],
  admin: ["manage-instructors", "manage-courses", "view-students"],
  instructor: ["create-course", "edit-course", "view-earnings"],
  student: ["view-courses", "take-assessments"],
};

// Check if user has permission
export const hasPermission = (role, permission) => {
  if (!role) return false;
  return PERMISSIONS[role]?.includes(permission);
};

// Shortcut: check multiple permissions
export const hasAnyPermission = (role, permissions = []) => {
  return permissions.some((p) => hasPermission(role, p));
};
