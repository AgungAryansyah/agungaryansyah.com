<script lang="ts">
	import type { Experience } from '$lib/data/experiences/types';

	let { data }: { data: { experiences: Experience[] } } = $props();
</script>

<div class="relative stagger-children">
	<div
		class="absolute left-3 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
	></div>

	{#each data.experiences as exp, i}
		<div class="relative pb-8 last:pb-0">
			<div
				class="absolute left-[6px] top-1 h-3 w-3 rounded-full border-2 border-link bg-bg md:left-1/2 md:-translate-x-1/2"
			></div>

			<div class="pl-8 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:pl-0">
				<div class="md:text-right">
					<span class="text-sm text-muted">{exp.period}</span>
					<h3 class="text-lg font-semibold text-heading">
						{exp.title}
					</h3>
					{#if exp.organization}
						<p class="text-sm text-body">{exp.organization}</p>
					{/if}
				</div>

				<div class="hidden md:block md:w-8"></div>

				<div>
					<p class="text-sm leading-relaxed text-body">
						{exp.description}
					</p>

					{#if exp.images}
						<div class="mt-3 flex flex-wrap gap-2">
							{#each exp.images as img}
								<img
									src={img.src}
									alt={img.alt}
									loading="lazy"
									class="h-32 w-auto rounded object-cover"
								/>
							{/each}
						</div>
					{/if}

					{#if exp.links}
						<div class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
							{#each exp.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-link font-semibold underline decoration-accent decoration-1 underline-offset-2 hover:decoration-link"
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
