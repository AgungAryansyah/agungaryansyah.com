<script lang="ts">
	import type { Experience } from '$lib/data/experiences/types';

	let { data }: { data: { experiences: Experience[] } } = $props();
</script>

<div class="relative mx-auto max-w-2xl">
	<div
		class="absolute left-3 top-0 bottom-0 w-0.5 bg-[#ccd0da] dark:bg-[#45475a] md:left-1/2 md:-translate-x-1/2"
	></div>

	{#each data.experiences as exp, i}
		{@const isLeft = i % 2 === 0}

		<div class="relative pb-8 last:pb-0">
			<div
				class="absolute left-[6px] top-1 h-3 w-3 rounded-full border-2 border-[#1e66f5] bg-[#eff1f5] dark:border-[#89b4fa] dark:bg-[#1e1e2e] md:left-1/2 md:-translate-x-1/2"
			></div>

			<div class="pl-8 md:flex md:pl-0">
				<div
					class="md:w-1/2 {isLeft ? 'md:mr-auto md:pr-6 md:text-right' : 'md:ml-auto md:pl-6'}"
				>
					<span class="text-sm text-[#7c7f93] dark:text-[#a6adc8]">{exp.period}</span>
					<h3 class="text-lg font-semibold text-[#4c4f69] dark:text-[#cdd6f4]">
						{exp.title}
					</h3>
					{#if exp.organization}
						<p class="text-sm text-[#5c5f77] dark:text-[#bac2de]">{exp.organization}</p>
					{/if}
					<p class="mt-2 text-sm leading-relaxed text-[#4c4f69] dark:text-[#cdd6f4]">
						{exp.description}
					</p>

					{#if exp.images}
						<div class="mt-3 flex flex-wrap gap-2 {isLeft ? 'md:justify-end' : ''}">
							{#each exp.images as img}
								<img
									src={img.src}
									alt={img.alt}
									loading="lazy"
									class="h-20 w-auto rounded object-cover"
								/>
							{/each}
						</div>
					{/if}

					{#if exp.links}
						<div
							class="mt-2 flex flex-wrap gap-x-4 gap-y-1 {isLeft ? 'md:justify-end' : ''}"
						>
							{#each exp.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-[#1e66f5] hover:underline dark:text-[#89b4fa]"
								>
									{link.text}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
