<script lang="ts">
	export let src: string;
	export let alt = '';
	export let className = '';
</script>

<picture class={className}>
	<!-- You can add <source> elements for webp/avif here if you generate them -->
	<img {src} {alt} loading="lazy" decoding="async" {...$$restProps} style="display:block;" />
</picture>
