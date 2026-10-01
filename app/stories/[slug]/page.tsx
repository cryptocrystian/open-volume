import { notFound } from "next/navigation";

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  // Route contract is intentionally live before public inventory exists.
  // Replace this with CMS/data-layer lookup when the first story is approved.
  notFound();
}
