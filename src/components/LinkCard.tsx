import type { LinkItem } from "@/types/link";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      {link.label}
    </a>
  );
}
