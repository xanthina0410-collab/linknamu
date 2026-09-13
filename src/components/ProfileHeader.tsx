import Image from "next/image";
import type { Profile } from "@/types/link";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-gray-100 dark:ring-gray-800">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>
      <h1 className="text-xl font-bold">{profile.name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{profile.bio}</p>
    </div>
  );
}
