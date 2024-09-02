import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: async () => {
		const res = await fetch("http://localhost:3000/api/hello");
		const data = await res.json();
		return data as { message: string };
	},
	component: Home,
});

function Home() {
	const message = Route.useLoaderData({ select: (s) => s.message });

	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to the home page!</p>
			<p>
				API Greeting message: <strong>{message}</strong>
			</p>
		</div>
	);
}
