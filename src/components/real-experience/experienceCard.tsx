import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  title: string;
  link: string;
  className?: string;
}

export default function ExperienceCard({
  title,
  link,
}: ExperienceCardProps) {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <div
      className="bg-black text-white p-[3rem] rounded-lg flex justify-between items-center"
    >
      {/* Text Content */}
      <div className="flex flex-col uppercase">
        <h3 className="text-[20px] font-semibold leading-[30px]">
          <span className="block">{firstWord}</span>
          <span className="block">{secondWord}</span>
        </h3>
        <Link
          href={link}
          className="mt-[2rem] text-[11px] text-[#8F8DA0] hover:text-blue hover:underline"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-[60px] h-[60px] pt-[2rem]">
        <Image
          src="/assets/icons/bitbucket.svg"
          alt="Bucket Icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
