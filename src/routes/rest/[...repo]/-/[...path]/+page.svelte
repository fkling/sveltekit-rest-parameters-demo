<script>
	export let data
	console.log("test")

	$: console.log(data)
</script>

<pre>{data.content}</pre>
