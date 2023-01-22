<script>
	export let colour;
	export let techName;
</script>

<div style={colour}>
	<p>{techName}</p>
</div>

<style>
	*:not(p) {
		text-transform: uppercase;
		font-weight: 800;
		border-radius: 10px;
		margin-top: 0.5rem;
		margin-right: 1rem;
		font-family: 'Montserrat';
		padding: 0.5rem;
		text-align: center;
		box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 4px rgba(255, 255, 255, 0.5);
	}
</style>
