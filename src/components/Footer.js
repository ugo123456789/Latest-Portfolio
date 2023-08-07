import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
	return (
		<footer className="dark:text-light dark:border-light w-full border-t-2 border-solid border-dark z-10 font-medium text-base lg:text-lg">
			<Layout className=" z-10 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className="flex items-center px-2">
					<span className="text-primary dark:text-primaryDark text-2xl px-1">
						&#9825;{" "}
					</span>{" "}
					Built by &nbsp;Ugonna
				</div>
				<Link className="underline" href="mailto:ugonnagodson512@gmail.com">
					Send a message
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
