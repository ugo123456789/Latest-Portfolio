import React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';


const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimatedText = ({ text, className = "" }) => {
	return (
		<motion.div
			className=""
			variants={quote}
			initial="initial"
			animate="animate">
			<motion.h1
				variants={quote}
				className={`dark:text-light block w-full flex-wrap text-dark font-bold capitalize text-6xl ${className}`}>
				{text.split(" ").map((word, index) => (
					<motion.span
						key={word + " - " + index}
						className="inline-block"
						variants={singleWord}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</motion.div>
	);
};

AnimatedText.propTypes = {
	text: PropTypes.string.isRequired, // 'text' prop is required and should be a string
	className: PropTypes.string, // 'className' prop is optional and should be a string
  };

export default AnimatedText;
