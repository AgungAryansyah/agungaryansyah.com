<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6 stagger-children">
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
						<span class="w-20 flex-none whitespace-nowrap text-body"
							>{work.displayDate}</span
						>
						<a
							href="/writings/{work.slug}"
							class="text-link font-semibold underline decoration-accent decoration-1 underline-offset-2 hover:decoration-link"
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
			class="text-link font-semibold underline decoration-accent decoration-1 underline-offset-2 hover:decoration-link">github</a
		>)
	</p>
</div>
