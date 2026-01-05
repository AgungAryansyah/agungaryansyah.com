<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div class="space-y-3">
		{#each data.works as work (work.slug)}
			<div class="flex gap-4">
				<span class="w-24 text-[#4c4f69] dark:text-[#cdd6f4]">{work.displayDate}</span>
				<a href="/works/{work.slug}" class="text-[#1e66f5] hover:underline dark:text-[#89b4fa]">
					{work.title}
				</a>
			</div>
		{/each}
	</div>
</div>
