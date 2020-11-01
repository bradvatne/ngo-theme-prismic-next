export default function hrefResolver(doc) {
  if (doc.type === "project") return "/projects/[slug]";
}
