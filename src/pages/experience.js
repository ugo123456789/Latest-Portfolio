import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/LiIcon";
import AnimatedText from "@/components/AnimatedText";
import Transition from "@/components/Transition";

const Details = ({ position, company, time, address, work }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 max-w-screen-md mx-auto flex flex-col items-center justify-between px-4 sm:px-8">
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-2xl sm:text-3xl">
					{position}&nbsp;
					<a className="capitalize dark:text-primary text-teal-600">
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75">
					{time} | {address}
				</span>
				<ul>
                <li className="font-medium w-full">{work}</li>
                </ul>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const { scrollYProgress } = useScroll({
		target: [ref1, ref2],
		offset: ["start end", "center start"],
	});

	return (
		<>
			<Head>
				<title>Ugonna | Experience Page</title>
				<meta
					name="description"
					content="Experience page for Ugonna Portfolio"></meta>
			</Head>
			<Transition />
			<main className="flex -top-20 flex-col items-center justify-center w-full">
				<Layout>
					<div>
						<AnimatedText
							text="Professional Experience"
							className="dark:text-white font-bold text-4xl md:text-8xl mb-32 w-full text-center"
						/>

						<div className="w-[90%] lg:w-[75%]  mx-auto relative dark:text-light">
							<motion.div
								style={{ scaleY: scrollYProgress }}
								className="absolute hidden md:flex left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
							/>
							<motion.div style={{ zIndex: 1, position: "relative" }}>
								<ul className="w-full flex flex-col items-start justify-between sm:ml-2 ml-4">
								<Details
										position="Frontend Engineer"
										company="LadderHills"
										time="2022-Present"
										address="London, United Kingdom"
										work="• A recruitment agency specializing in B2B, and Healthcare Recruitment.
										• Leading the development of a website for a startup recruitment agency, managing project tasks from requirement and contributing to design and functionality decisions.
										• Implementing responsive design and ensuring compliance with WCAG standards, resulting in a 20% increase in conversion rates.
										• Received positive client feedback and internal recognition for exceptional design, functionality and web performance."
									/>
									<Details
										position="Frontend Developer"
										company="Freelance"
										time="2022-Present"
										address="London, United Kingdom"
										work="Developed a robust e-commerce content management system application using React, TailwindCSS, Typescript and Next.js
										• Resolved complex challenges related to server and client-side rendering, ensuring seamless user experiences across devices.
										• Developed a custom server-side rendering (SSR) solution in Next.js, which led to a 50% reduction in page load times for our CMS
										 web application. This optimization allowed us to efficiently render dynamic content while improving SEO performance, resulting in a 15% increase in organic traffic over a span of six months."
									/>

									<Details
										position="Software Engineer Intern"
										company="Bincom Tech"
										time="2021-2022"
										address="Lagos, Nigeria"
										work="• Developed efficient web applications and APIs using Django,Python, and other technologies.
                                        • Created datamodels,views,and controllers to deliver seamless userexperiences.   
                                        • Optimized database designs and integrated third-party APIs for enhanced system performance."
									/>
									<div className="flex mt-24 flex-col items-center justify-center w-full">
										<AnimatedText
											text="Education"
											className="dark:text-light font-bold text-4xl md:text-8xl mb-32 w-full text-center"
										/>
									</div>

									<Details
										position="Information Technology"
										company="Middlesex University"
										time="2021-2022"
										address="London, United Kingdom"
										work="Undergraduate Degree (First Class) Bachelor of Science - BSc, Information Technology and Business Information Systems 
                                        • Lead the web development team in building a Blockchain application for our final projects.
                                        • Worked with a UI/UX team in conducting user research to revamp the UberEats application which enhanced user experience.
                                        • Designed, optimized and refactored code to maximize performance and user experience under the guidelines of senior Engineers."
									/>

									<Details
										position="Software Engineering"
										company="APTECH Computer Education"
										time="2019-2021"
										address="Lagos, Nigeria"
										work="Advanced Diploma in Software Engineering. "
									/>
								</ul>
							</motion.div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default Experience;
