<script lang="ts">
	import { Canvas, T } from '@threlte/core'
	import { OrbitControls, Environment } from '@threlte/extras'
	import M3 from './M3.svelte'
	import {
		saveConfiguration,
		fetchConfiguration,
		fetchOptions,
		type API_RESPONSE,
		type CAR_CONFIGURATION,
		type CAR_OPTIONS,
		type COLOR_OPTION
	} from '$lib/API.ts';
	import toast, { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';

	// Array of Car Configuration Options
	let carColors: COLOR_OPTION[] = [];
	let rimColors: COLOR_OPTION[] = [];
	let caliperColors: COLOR_OPTION[] = [];

	// Selected colors for each component
	let selectedCarColor: COLOR_OPTION | null = null;
	let selectedRimColor: COLOR_OPTION | null = null;
	let selectedCaliperColor: COLOR_OPTION | null = null;

	// Binded Code Variable for Code-Input field
	let inputConfigurationCode = ''

	onMount(async () => {
		try{
			const result: API_RESPONSE<CAR_OPTIONS> | null = await fetchOptions()
			if (result !== null && result.status.status === 'SUCCESS' && result.data !== null) {
				carColors = result.data.car;
				rimColors = result.data.rim;
				caliperColors = result.data.caliper;

				selectedCarColor = carColors[0];
				selectedRimColor = rimColors[0];
				selectedCaliperColor = caliperColors[0];
			} else {
				console.error('Options fetch failed:', result?.status.message ?? 'Unknown error');
			}
		} catch(err){
			console.error(err);
		}
	});

	// Function handle the load button click
	async function handleLoad(){
		try {
			const result: API_RESPONSE<CAR_CONFIGURATION> | null = await fetchConfiguration(inputConfigurationCode)

			if (result?.status.status === 'SUCCESS' && result.data !== null) {
				// Check if Values are null (avoid TS-Warnings)
				if (selectedCarColor && selectedRimColor && selectedCaliperColor) {
					selectedCarColor.hex = result.data.config.carColor
					selectedRimColor.hex = result.data.config.rimColor
					selectedCaliperColor.hex = result.data.config.caliperColor
				}

				toast.success(`Die Konfiguration wurde geladen! Geladener Code: ${result.data?.code}`, {
					duration: 10000,
					position: 'top-right'
				})
			}else {
				toast.error(`Fehlgeschlagen: ${result?.status.message ?? 'Unbekannter Fehler'}`, {
					duration: 10000,
					position: 'top-right'
				})
			}

		} catch (error) {
			console.log(error)
			toast.error(`Fehlgeschlagen: ${(error as Error).message}`, {
				duration: 10000,
				position: 'top-right'
			})
		}
	}

	// Function to handle the save button click
	async function handleSave() {
		// Check if Variables are null (avoid TS-Warnings)
		if (!selectedCarColor || !selectedRimColor || !selectedCaliperColor) {
			console.error("Farben nicht ausgewählt!");
			return;
		}

		const config = {
			carColor: selectedCarColor.hex,
			rimColor: selectedRimColor.hex,
			caliperColor: selectedCaliperColor.hex,
		};
		try {
			const result: API_RESPONSE<CAR_CONFIGURATION> | null = await saveConfiguration(config);
			if (result?.status.status === 'SUCCESS'){
				toast.success(`Deine Konfiguration wurde gespeichert! Dein Code lautet: ${result.data?.code}`, {
					duration: 10000,
					position: 'top-right'
				})
			} else {
				toast.error(`Fehlgeschlagen: ${result?.status.message ?? 'Unbekannter Fehler'}`, {
					duration: 10000,
					position: 'top-right'
				})
			}
		} catch (error) {
			console.log(error)
			toast.error(`Fehlgeschlagen: ${(error as Error).message}`, {
				duration: 10000,
				position: 'top-right'
			})
		}
	}
</script>

<div class="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded h-[80vh] w-full">
	<Canvas class="w-full h-full">
		<T.AmbientLight intensity={0.5} />
		<T.DirectionalLight position={[5, 10, 5]} intensity={1} />
		<T.DirectionalLight position={[-10, 5, 0]} intensity={1} />
		<T.DirectionalLight position={[1, 5, 0]} intensity={1} />

		<Environment preset="city" />

		<T.PerspectiveCamera makeDefault position={[5, 3, 7.5]} fov={80} near={0.1} far={1000}>
			<OrbitControls enableDamping />
		</T.PerspectiveCamera>

		<T.Group position={[0, 0, -0.5]} scale={2}>
			{#if selectedCarColor && selectedRimColor && selectedCaliperColor}
				<M3
					carColor={selectedCarColor.hex}
					rimColor={selectedRimColor.hex}
					caliperColor={selectedCaliperColor.hex}
				/>
			{/if}
		</T.Group>

		<T.GridHelper args={[10, 10]} />
	</Canvas>
</div>

<div class="options-container">
	<!-- BODY -->
	<div class="option-card">
		<h3>Body Paint</h3>
		<div class="color-grid">
			{#each carColors as color}
				<button
					on:click={() => selectedCarColor = color}
					class="color-dot {selectedCarColor?._id === color._id ? 'selected' : ''}"
					style="background-color: {color.hex}"
					aria-label="Body Paint Color Selector"
					title="{color.name} ({color.price} CHF)"
				></button>
			{/each}
		</div>
	</div>

	<!-- RIM -->
	<div class="option-card">
		<h3>Rim Color</h3>
		<div class="color-grid">
			{#each rimColors as color}
				<button
					on:click={() => selectedRimColor = color}
					class="color-dot {selectedRimColor?._id === color._id ? 'selected' : ''}"
					style="background-color: {color.hex}"
					aria-label="Rim Paint Color Selector"
					title="{color.name} ({color.price} CHF)"
				></button>
			{/each}
		</div>
	</div>

	<!-- CALIPER -->
	<div class="option-card">
		<h3>Caliper Color</h3>
		<div class="color-grid">
			{#each caliperColors as color}
				<button
					on:click={() => selectedCaliperColor = color}
					class="color-dot {selectedCaliperColor?._id === color._id ? 'selected' : ''}"
					style="background-color: {color.hex}"
					aria-label="Caliper Paint Color Selector"
					title="{color.name} ({color.price} CHF)"
				></button>
			{/each}
		</div>
	</div>
</div>

<div class="api-controls">
	<div class="load-control">
		<input class="dark:text-black text-black" type="text" placeholder="6-stelliger Code" maxlength="6" bind:value={inputConfigurationCode} />
		<button class="load-button" on:click={handleLoad}>Laden</button>
	</div>

	<button on:click={handleSave} class="save-button">
		Speichern
	</button>
</div>

<Toaster />

<style>

    .load-control {
        display: flex;
        gap: 0.5rem;
    }

    .api-controls {
        position: absolute;
        bottom: 2rem; /* <-- war evtl. gleich wie .options-container */
        right: 2rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        z-index: 20; /* etwas höher als die Farboptionen */
    }

    .load-control input {
        padding: 0.75rem;
        border-radius: 8px;
        border: 1px solid #ccc;
        width: 150px;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .load-button,
    .save-button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        color: white;
    }

    .load-button {
        background-color: #4A90E2;
    }

    .save-button {
        background-color: #2ECC71;
    }

    .options-container {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        display: flex;
        gap: 1.5rem;
        z-index: 10;
    }

    .option-card {
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(6px);
        border-radius: 12px;
        padding: 1rem;
        width: 30vh;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .option-card h3 {
        margin-bottom: 0.75rem;
        font-size: 1rem;
        text-align: center;
    }

    .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
        gap: 0.5rem;
        justify-items: center;
        width: 100%;
    }

    .color-dot {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
        transition: all 0.2s;
    }

    .color-dot:hover {
        transform: scale(1.1);
        border-color: #fff;
    }

    .color-dot.selected {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }

</style>