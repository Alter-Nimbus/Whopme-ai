import Image from "next/image";
import Link from "next/link";
import React from "react";
import { appFeatures, packageData } from "./constants";
import PackageCard from "./components/PackageCard";
import AppFeatureCard from "./components/AppFeatureCard";

export default function Pricing() {
	return (
		<div>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-start sm:items-center gap-5 p-2 sm:p-4">
					<h1 className="sm:text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Choose A pricing plan
					</h1>
					<p className="max-w-3xl text-white/80 leading-relaxed sm:text-center">
						We are a passionate team of AI enthusiasts, engineers, and
						innovators who are deeply commited to democratizing AI. Our platform
						is a testament to our belief in the democratizing of technology
					</p>
					<button className="px-6 py-2 border border-white/50 rounded-xl hover:bg-gray-800/50 transition duration-500">
						Contact Us
					</button>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto p-2 sm:p-4">
				<div className="mt-20 max-w-[1300px] mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
						{packageData.map((data, index) => (
							<PackageCard key={index} {...data} />
						))}
					</div>
					<p className="mt-10 opacity-80">
						Want access to enterprise features like more credits, unlimited
						LinkedIn, user permissions, and more? Email us at{" "}
						<Link href={"#"} className="text-primary-yellow">
							info@whopme.com
						</Link>
					</p>
				</div>
				<div className="mt-28">
					<div>
						<Image
							src="/slash.png"
							alt="Slash"
							height={150}
							width={600}
							className="absolute left-0 -translate-y-5"
						/>
						<h1 className="uppercase z-10 relative mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Side - by - Side rundown 👇
						</h1>
					</div>
					<div className="mt-20">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 overflow-x-scroll 2xl:overflow-visible pb-3">
							{appFeatures.map((feature, index) => (
								<AppFeatureCard feature={feature} key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
