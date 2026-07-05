<script lang="ts">
	let { children } = $props();
</script>

<article
	class="prose max-w-none prose-headings:text-[#16294e] dark:prose-headings:text-[#eef4fc] prose-p:text-[#2d4673] dark:prose-p:text-[#caddf4] prose-a:text-[#284d78] dark:prose-a:text-[#8fb9de]"
>
	{@render children()}
</article>
