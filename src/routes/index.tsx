import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartIcon, PlayCircle } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
	component: WelcomePage,
});

function WelcomePage() {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			className="h-screen w-full px-4 flex flex-col items-center justify-center bg-linear-to-b from-red-600/60 to-black"
		>
			<motion.img
				src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
				alt="Pokemon Logo"
				className="w-80 md:w-[500px] mb-12 drop-shadow-[0_0_25px_rgba(255,255,0,0.5)]"
				initial={{
					scale: 0.8,
					y: 20,
				}}
				animate={{
					scale: 1,
					y: 0,
				}}
				transition={{
					type: "spring",
					stiffness: 100,
				}}
			/>

			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					delay: 1,
					duration: 1,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<Link
					to="/home"
					className="py-3 px-12 lg:text-xl font-bold no-underline uppercase tracking-widest border-2 border-white/20 bg-red-600 text-white rounded-lg hover:scale-110 transition-transform flex items-center gap-3"
				>
					<PlayCircle className="w-6 h-6" />
					Pressione Iniciar
				</Link>
			</motion.div>

			<div className="absolute bottom-8 uppercase text-white/40 font-mono text-xs">
				<p>
					FEITO COM{" "}
					<HeartIcon className="text-red-500 inline-block mb-1" size="1rem" />{" "}
					POR{" "}
					<a
						href="https://www.linkedin.com/in/albertov-albuquerque/"
						target="_blank"
						rel="noopener"
						className="underline"
					>
						Alberto Santos
					</a>
				</p>
			</div>
		</motion.div>
	);
}
