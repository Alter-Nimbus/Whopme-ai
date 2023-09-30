import React, { useState } from "react";
import SocialAuthButton from "../components/SocialAuthButton";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "next/image";
import RegistrationForm from "./components/RegistrationForm";
import Link from "next/link";
import ImageFlipper from "../components/ImageFlipper";
export default function page() {
	const googleIcon = "/logos/icons8-google.svg";
	const appleIcon = "/logos/icons8-apple.svg";

	const images = [
		"/authFlow/6c2e17dbefdb7be276e7096bbbba2d8d.jpeg",
		"/authFlow/625f5e2001e55afa0ff8f4d675aa9eba.jpeg",
		"/authFlow/c68d5ef96ff41fc45baa1d965600c0a2.jpeg",
	];
	
	return (
		<main className="bg-black w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="flex items-center gap-10 xl:gap-28 p-3 sm:p-4">
				<section className="w-full max-w-[500px]">
					<div className="flex flex-col gap-5">
						<h1 className="text-3xl sm:text-4xl font-bold">Sign up</h1>
						<p className="text-white/80">
							Register to login to your admin panel
						</p>
						<div className="flex gap-4">
							<SocialAuthButton
								image={googleIcon}
								title="Sign up with google"
							/>
							<SocialAuthButton image={appleIcon} title="Sign up with apple" />
						</div>
					</div>
					<RegistrationForm />
					<div className="mt-6">
						<p className="text-white/50">
							Have an account?{" "}
							<Link
								href={"/auth/login"}
								className="capitalize text-white font-semibold cursor-pointer">
								Sign in
							</Link>
						</p>
					</div>
				</section>
				<section className="w-full hidden lg:block">
					<ImageFlipper images={images} />
				</section>
			</div>
		</main>
	);
}
