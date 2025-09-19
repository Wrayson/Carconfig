<script lang="ts">
	import { Heading, Button } from 'flowbite-svelte';

	export let services = [
		{ src: '/models/i7.webp', alt: 'i7 m70', label: 'i7' },
		{ src: '/models/340i.webp', alt: '340i', label: 'M340i' },
		{ src: '/models/m3.webp', alt: 'm3 g80', label: 'M3' },
		{ src: '/models/x7.webp', alt: 'x7', label: 'X7' },
	];

	let hoveredIndex = -1;

	function handleMouseEnter(index) {
		hoveredIndex = index;
	}

	function handleMouseLeave() {
		hoveredIndex = -1;
	}

</script>


<div class="flex justify-center items-center mt-5 my-15 w-10/12 overflow-hidden transform skew-x-[7deg]">
	{#each services as service, index}
		<div
			class={`relative flex-1 transition-all duration-1000 ease-in-out h-[75vmin] ${
        hoveredIndex === index ? 'flex-[3]' : ''
      } ${index < services.length - 1 ? 'mr-4' : ''}`}
			on:mouseenter={() => handleMouseEnter(index)}
			on:mouseleave={handleMouseLeave}
			role="button" tabindex="0" aria-label="Example BMW Models"

		>
			<img
				src={service.src}
				alt={service.alt}
				class="w-12/12 h-full object-cover duration-400 ease-in-out grayscale-[100%] hover:grayscale-0"
				loading="lazy"
			/>
			<div
				class={`absolute bottom-0 left-0 w-full p-2 text-center whitespace-nowrap transition-all duration-600 -skew-x-[7deg] ease-in-out ${
          hoveredIndex === index ? 'top-[calc(100%-2em)] text-white text-2xl' : 'text-sm'
        } `}
			>
				{service.label}
			</div>
		</div>
	{/each}
</div>

<!--

<Heading tag="h3" class="mb-4 text-xl font-normal text-center">
	Noch unschlüssig? Dann lass dich von unserem Angebot inspirieren:
</Heading>
<Button
	color="alternative" pill
	class="group inline-flex items-center justify-center px-6 py-4 transition-all duration-200 border
            border-current hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-[#B0AD9E]
            text-current">
        <span class="transition-all duration-200 ease-in-out group-hover:mr-2 group-hover:text-[#B0AD9E] text-current">
    Lass dich inspirieren
  </span>
	<span aria-hidden="true" class="overflow-hidden w-0 transition-all duration-200 ease-in-out
           group-hover:w-4 group-hover:text-[#B0AD9E] text-current">
    &gt;
  </span>
</Button>

-->

<style>
    .flex > div > img.object-cover { /* More specific targeting */
        filter: grayscale(100%);
        transition: filter 0.4s ease-in-out;
    }

    .flex > div:hover > img.object-cover,
    .flex > div:active > img.object-cover { /* Target the image within the hovered/active div */
        filter: grayscale(0);
    }
</style>