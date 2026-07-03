<script lang="ts">
	let { children } = $props();
</script>

<article
	class="prose max-w-none prose-headings:text-[#4c4f69] dark:prose-headings:text-[#cdd6f4] prose-p:text-[#4c4f69] dark:prose-p:text-[#cdd6f4] prose-a:text-[#1e66f5] dark:prose-a:text-[#89b4fa]"
>
	{@render children()}
</article>
