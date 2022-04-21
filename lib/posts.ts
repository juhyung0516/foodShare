import fs from "fs";
import path from "path";
// main function takes a string and returns an object
import matter from "gray-matter";
//
import { sortByDate } from "utils";
export const getPosts = () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts"), file, "utf-8");
    const { data: frontmatter } = matter(file);
    return { frontmatter, slug };
  });
  return posts.sort(sortByDate);
};
