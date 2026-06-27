import { notFound, redirect } from "next/navigation";
import { servicePages, subServicePages } from "@/lib/data";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export default function ServiceCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = servicePages.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  // 카테고리(에어컨·석재보수)로 들어오면 첫 번째 세부 서비스로 바로 이동
  const first = subServicePages.find((s) => s.category === params.slug);
  if (!first) notFound();

  redirect(`/services/${params.slug}/${first.slug}`);
}
