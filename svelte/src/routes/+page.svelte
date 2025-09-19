<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Heading, Button } from 'flowbite-svelte';
	import ModelPreview from './ModelPreview.svelte';


</script>


<main class="flex flex-col items-center justify-center pt-12 pb-24 px-4">
	<!--
	<img
		src="/logo.svg"
		alt="Feel Pretty - Be Pretty Logo"
		class="h-80 sm:h-80 dark:hidden"
	/>
	<img
		src="/logo.svg"
		alt="Feel Pretty - Be Pretty Logo"
		class="h-80 sm:h-80 hidden dark:block"
	/>
	-->

	<img
		src="/logo.svg"
		alt="BMW"
		class="h-20 sm:h-20 mb-6"
	/>

	<Heading tag="h1" class="mb-4 text-2xl font-normal text-center">
		Die digitale BMW Autowelt
	</Heading>

	<Heading tag="h2" class="mb-4 text-xl font-normal text-center">
		Konfiguriere jetzt deinen einzigartigen BMW!
	</Heading>

	<Button href="/models"
					color="alternative" pill
					class="group inline-flex items-center justify-center px-6 py-4 transition-all duration-200 border
            border-current hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-[#B0AD9E]
            text-current">
        <span class="transition-all duration-200 ease-in-out group-hover:mr-2 group-hover:text-[#B0AD9E] text-current">
    Jetzt konfigurieren
  </span>
		<span aria-hidden="true" class="overflow-hidden w-0 transition-all duration-200 ease-in-out
           group-hover:w-4 group-hover:text-[#B0AD9E] text-current">
    &gt;
  </span>
	</Button>

	<ModelPreview />

</main>

