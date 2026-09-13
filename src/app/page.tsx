import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import type { LinkItem, Profile } from "@/types/link";

const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar.svg",
};

const links: LinkItem[] = [
  { id: "1", label: "GitHub", url: "https://github.com/example" },
  { id: "2", label: "LinkedIn", url: "https://linkedin.com/in/example" },
  { id: "3", label: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-6 py-16">
      <DarkModeToggle />
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
