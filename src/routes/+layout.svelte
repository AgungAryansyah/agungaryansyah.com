<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-[#eff1f5] px-4 py-8 dark:bg-[#1e1e2e]">
	<div class="mx-auto max-w-2xl space-y-8">
		<!-- Logo/Name  -->
		<div class="text-center">
			<h1 class="text-4xl font-bold">Agung</h1>
		</div>

		<!-- Navigation  -->
		<nav class="flex justify-center gap-4 pb-8 text-[#1e66f5] dark:text-[#89b4fa]">
			<a href="/" class="hover:underline">home</a>
			<a href="/works" class="hover:underline">works</a>
			<a href="/connect" class="hover:underline">connect</a>
		</nav>

		<!-- Page content goes here -->
		{@render children()}
	</div>
</div>
