<script lang="ts">
	let { children } = $props();
</script>

<article class="prose prose-gray max-w-none">
	{@render children()}
</article>
