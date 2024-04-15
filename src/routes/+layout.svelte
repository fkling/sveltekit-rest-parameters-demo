<script>
	import FileTree from './FileTree.svelte'
	import { page } from '$app/stores'

	export let data
</script>

<aside>
	<h4>Rest</h4>
	<FileTree root={data.root} prefix="rest"/>

	<h4>Rest with parameter validator</h4>
	<FileTree root={data.root} prefix="restwparam"/>
</aside>
<main>
	<div>Params: {JSON.stringify($page.params)}</div>
	<slot />
</main>

<style>
	:global(body) {
		display: flex;
		height: 100vh;
	}
	aside {
		width: 400px;
		border-right: 1px solid #ccc;
		overflow-y: auto;
	}

	main {
		padding: 1rem;
		flex: 1;
		overflow-y: auto;
	}
</style>
