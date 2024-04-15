<script>
	export let root
	export let prefix
</script>


<ul>
	{#each root.children as entry}
		<li>
			{#if entry.isDirectory}
				{entry.name}
				<svelte:self root={entry} {prefix}/>
			{:else}
				<a href="/{prefix}/foo/-/{entry.path}">{entry.name}</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li > :global(ul) {
		margin-left: 1rem;
	}
</style>
