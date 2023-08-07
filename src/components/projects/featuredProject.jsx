import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-8 md:p-12 relative">
      <div className="absolute top-0 -right-2 md:-right-3 -z-10 w-full md:w-[100%] md:h-[103%] h-[101%] rounded-br-3xl md:rounded-2xl rounded-[1.5rem] dark:bg-light bg-dark" />

      <Link href={link} target="_blank" className="w-full lg:w-1/2 overflow-hidden hover:scale-105 duration-500 rounded-lg">
        <Image src={img} alt={title} width={800} height={600} className="w-full h-auto" />
      </Link>

      <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col items-start justify-between mt-4 md:mt-0">
        <span className="text-primary text-sm md:text-base dark:text-primaryDark font-medium">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-base sm:text-3xl lg:text-4xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-sm md:text-base font-medium dark:text-light text-dark">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8 md:w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 md:p-3 lg:px-6 md:text-lg font-semibold text-base"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
};
