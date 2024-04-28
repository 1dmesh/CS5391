export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="h-full w-full flex flex-wrap content-center justify-center">
				{children}
			</div>
		</section>
	);
}
