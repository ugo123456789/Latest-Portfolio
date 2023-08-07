import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";

export const Project1 = ({ type, title, img, link, github }) => {
	return (
		<article
			className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-6 relative">
			<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-2xl dark:bg-light bg-dark" />

			<Link
				href={link}
				target="_blank"
				className="w-full cursor-pointer overflow-hidden hover:scale-105 duration-500
      rounded-lg">
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>

			<div className="w-full flex flex-col  items-start justify-between mt-4">
				<span className="text-primary dark:text-primaryDark  font-medium text-xl">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2">
					<h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
				</Link>
				<div className="mt-2 w-full flex items-center justify-between">
					<Link href={github} target="_blank" className="w-8">
						<GithubIcon />
						{""}
					</Link>
					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg bg-dark text-light p-2 px-6 
        text-lg font-semibold">
						Live Demo
					</Link>
				</div>
			</div>
		</article>
	);
};
