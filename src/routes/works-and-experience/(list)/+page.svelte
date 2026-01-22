<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<script lang="ts">
		import type { PageData } from './$types';

		let { data }: { data: PageData } = $props();
	</script>

	{#each data.worksByYear as group (group.year)}
		<section>
			<h3 class="mb-2 text-lg font-semibold">{group.year}</h3>
			<div class="space-y-3">
				{#each group.works as work (work.slug)}
					<div class="flex">
						<span class="w-20 flex-none whitespace-nowrap text-[#4c4f69] dark:text-[#cdd6f4]"
							>{work.displayDate}</span
						>
						<a
							href="/works-and-experience/{work.slug}"
							class="text-[#1e66f5] no-underline hover:underline dark:text-[#89b4fa]"
						>
							{work.title}
						</a>
					</div>
				{/each}
			</div>
		</section>
	{/each}

	<p>
		(*i'm currently still wriring about my other works, for now you can check my
		<a
			href="https://github.com/AgungAryansyah"
			target="_blank"
			rel="noopener noreferrer"
			class="text-[#1e66f5] hover:underline dark:text-[#89b4fa]">github</a
		>)
	</p>
</div>
