<script lang="ts">
	let { children } = $props();
</script>

<article
	class="prose max-w-none prose-headings:text-heading prose-p:text-body prose-a:text-link"
>
	{@render children()}
</article>
