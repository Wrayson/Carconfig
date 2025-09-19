<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import 'flowbite-svelte';

	let { children } = $props();
</script>


<div class="transition-colors duration-500 ease-in-out min-h-screen bg-white dark:bg-gray-800 dark:text-white ">
	<Header />

	{@render children()}

	<Footer />
</div>

