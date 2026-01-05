<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div class="space-y-3">
		{#each data.works as work (work.slug)}
			<div class="flex gap-4">
				<span class="w-16 text-gray-500">{work.displayDate}</span>
				<a href="/works/{work.slug}" class="text-blue-600 hover:underline">
					{work.title} ({new Date(work.date).getFullYear()})
				</a>
			</div>
		{/each}
	</div>
</div>
