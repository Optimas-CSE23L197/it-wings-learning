import React from "react";
import CategoryList from "./CategoryList";
import RecentPosts from "./RecentPosts";
import TagsList from "./TagLists";

export default function Sidebar() {
  return (
    <aside className="md:w-1/4 pt-2 space-y-10">
      <CategoryList />
      <RecentPosts />
      <TagsList />
    </aside>
  );
}
