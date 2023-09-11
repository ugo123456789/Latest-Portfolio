import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
	LinkedInIcon,
	GithubIcon,
	SunIcon,
	MoonIcon,
} from "./icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { Twirl as Twirl } from "hamburger-react";

import PropTypes from 'prop-types';


const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className} relative group `}>
			{title}

			<span
				className={`dark:bg-light h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? `w-full` : "w-0"}`}>
				&nbsp;
			</span>
		</Link>
	);
};

CustomLink.PropTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
}

const MobilieLink = ({ href, title, className = "", toggle }) => {
	const router = useRouter();

	const handleClick = () => {
		toggle();
		router.push(href);
	};

	return (
		<button onClick={handleClick} className={`${className} relative group `}>
			{title}

			<span
				className={`dark:bg-light h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? `w-full` : "w-0"}`}>
				&nbsp;
			</span>
		</button>
	);
};
MobilieLink.PropTypes = {
	toggle: PropTypes.func.isRequired,
	href: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string
}

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<header className="dark:text-light pb-0.5 w-full px-32 py-8 font-medium flex justify-between items-center relative z-10">
			<button onClick={handleClick} className="left-4 top-4 absolute flex-col lg:hidden md:flex">
				<Twirl />
			</button>

			<nav className="md:hidden justify-start space-x-4 font-mono lg:flex hidden">
				<CustomLink
					href="/"
					title="Home"
					className="font-mont hover:text-cyan-600"
				/>
				<CustomLink
					href="/about"
					title="About"
					className="font-mont hover:text-cyan-600"
				/>
				<CustomLink
					href="/projects"
					title="Projects"
					className="font-mont hover:text-cyan-600"
				/>
				<CustomLink
					href="/experience"
					title="Experience"
					className="font-mont hover:text-cyan-600"
				/>
			</nav>

			<div className="flex items-center absolute left-1/2 top-2 transform -translate-x-1/2">
				<Logo />
			</div>

			<nav className="md:hidden flex-row space-x-2 items-center justify-center flex-wrap lg:flex hidden">
				<motion.a
					whileHover={{ y: -2 }}
					href="https://www.linkedin.com/in/ugonna-onyekwuluje-035262166/"
					target={"_blank"}>
					<LinkedInIcon />
				</motion.a>
				<motion.a
					whileHover={{ y: -2 }}
					href="https://github.com/ugo123456789/"
					target={"_blank"}>
					<GithubIcon />
				</motion.a>
				<button
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`ml-3 flex items-center justify-center rounded-full p-1 ${
						mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
					}`}>
					{mode === "dark" ? (
						<SunIcon className={"fill-dark"} />
					) : (
						<MoonIcon className={"fill-dark"} />
					)}
				</button>
			</nav>

			{isOpen ? (
				<motion.div
				initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
				animate={{scale:1, opacity:1}}
					className="min-w-[70vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30  justify-start space-x-4 font-mono lg:hidden
  bg-dark/90 dark:bg-light/75 text-light dark:text-dark rounded-lg backdrop-blur-md py-32">
					<nav className="flex flex-col justify-center items-center">
						<MobilieLink
							href="/"
							title="Home"
							className="font-mont hover:text-cyan-600"
							toggle={handleClick}
						/>
						<MobilieLink
							href="/about"
							title="About"
							className="font-mont hover:text-cyan-600"
							toggle={handleClick}
						/>
						<MobilieLink
							href="/projects"
							title="Projects"
							className="font-mont hover:text-cyan-600"
							toggle={handleClick}
						/>
						<MobilieLink
							href="/experience"
							title="Experience"
							className="font-mont hover:text-cyan-600"
							toggle={handleClick}
						/>

						<nav className="flex flex-row space-x-2 items-center justify-center flex-wrap lg:hidden ">
							<motion.a
								whileHover={{ y: -2 }}
								href="https://www.linkedin.com/in/ugonna-onyekwuluje-035262166/"
								target={"_blank"}>
								<LinkedInIcon />
							</motion.a>
							<motion.a
								whileHover={{ y: -2 }}
								href="https://github.com/ugo123456789/"
								target={"_blank"}>
								<GithubIcon />
							</motion.a>
							<button
								onClick={() => setMode(mode === "light" ? "dark" : "light")}
								className={`ml-3 flex items-center justify-center rounded-full p-1 ${
									mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
								}`}>
								{mode === "dark" ? (
									<SunIcon className={"fill-dark"} />
								) : (
									<MoonIcon className={"fill-dark"} />
								)}
							</button>
						</nav>
					</nav>
				</motion.div>
			) : null}
		</header>
	);
};

export default NavBar;
