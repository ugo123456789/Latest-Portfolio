import AnimatedText from "@/components/AnimatedText";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profile from "../../public/images/profile/profile.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Transition from "@/components/Transition";
import React from "react";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>Ugonna | About Page</title>
				<meta
					name="description"
					descri="About page for Ugonna Portfolio"></meta>
			</Head>
			<Transition/>

			<main className="dark:text-light flex flex-col items-center justify-center w-full">
				<AnimatedText
					className="mt-14 lg:mt-10 text-center relative lg:text-8xl text-2xl"
					text="Fuelled By Passion!"
				/>
				<Layout className="pt-10">
					<div className="grid w-full grid-cols-8 lg:gap-16 gap-8">
					<div className="col-span-8 lg:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8">
							<div className="dark:bg-light absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-2xl bg-dark" />
							<Image
								src={profile}
								height="100%"
								alt="Profile"
								className="w-full h-fit bg-dark rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
						</div>
						<div className="col-span-8 basis-1 lg:col-span-4 flex flex-col items-start justify-start">
							<h2 className="dark:text-light/75 mb-4 text-lg font-bold uppercase text-dark/75">
								Biography
							</h2>
							<p className="font-medium">
								I am a Frontend developer with 1+ year of professional work
								experience working with Javascript, React.js and Typescript. Proficient
								in modern technologies such as NextJs and TailwindCSS.
							</p>
							<p className="my-4 font-medium">
							Frontend developer with a strong focus on building robust and user-friendly web applications. 
							With extensive experience in React.js and TypeScript, I take pride in crafting efficient and scalable solutions that enhance the user experience.
							</p>
							<p className="font-medium">
								Whether I'm working on a website, mobile app, or other digital
								product, I bring my commitment to design excellence and
								user-centered thinking to every project I work on.I have contributed to several successful projects, ranging from e-commerce platforms to web applications.
								 Each project showcases my ability to solve complex problems, implement responsive designs, and deliver delightful user interactions.
							</p>
						</div>
	

						<div className="col-span-8  lg:col-span-8 flex-row flex items-end justify-between">
							<div className="flex flex-col text-center justify-center items-center">
								<span className="inline-block text-4xl md:text-5xl lg:text-7xl font-bold">
									<AnimatedNumbers value={20} />+
								</span>
								<h2 className="dark:text-light text-center text-base md:text-lg lg:text-xl font-medium capitalize text-dark">
									Satisfied Clients
								</h2>
							</div>

							<div className="flex flex-col text-center items-end justify-center">
								<span className="inline-block text-4xl md:text-5xl  lg:text-7xl font-bold">
									<AnimatedNumbers value={5} />+
								</span>
								<h2 className=" dark:text-light text-center  text-sm lg:text-xl md:text-lg font-medium capitalize text-dark">
									Projects Completed
								</h2>
							</div>

							<div className="flex flex-col text-center items-end justify-center">
								<span className="inline-block text-4xl md:text-5xl lg:text-7xl font-bold">
									<AnimatedNumbers value={1} />+
								</span>
								<h2 className="dark:text-light text-center  text-sm lg:text-xl md:text-lg font-medium capitalize text-dark">
									Years of Experience
								</h2>
							</div>
						</div>
					</div>
					<Skills />
				</Layout>
			</main>
		</>
	);
};

export default about;
