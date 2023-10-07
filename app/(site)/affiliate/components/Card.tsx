import Image from "next/image";
import React from "react";
interface Item {
	icon: string;
	title: string;
	description: string;
}
interface IProps {
	item: Item;
}
export default function Card({ item }: IProps) {
	return (
		<div className="bg-[url('/rectangle-background-h-center.png')] bg-cover bg-center py-8 px-2 sm:px-6 rounded-2xl space-y-3 cursor-pointer flex flex-col items-center justify-center">
			<Image src={item.icon} alt="Icon" width={40} height={40} />
			<h1 className="text-lg font-semibold capitalize">{item.title}</h1>
			<p className="text-sm text-[#D7D7D7] max-w-xs text-center">
				{item.description}
			</p>
		</div>
	);
}
