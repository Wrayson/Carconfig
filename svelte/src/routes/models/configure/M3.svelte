<script lang="ts">
  import { T } from '@threlte/core'
  import { useGltf, useDraco } from '@threlte/extras'
  import { Color } from 'three'

  let { fallback, error, children, ref = $bindable(), carColor = 'black', rimColor = 'black', caliperColor = 'green', ...props } = $props()

  // Add the useDraco hook to decompress the GLTF file
  const dracoLoader = useDraco()
  const gltf = useGltf('/glb/M3.glb', { dracoLoader })

  // Use a reactive effect to change the materials after the model has loaded
  $effect(() => {
    if ($gltf) {
      // Find and change the car body material
      const bodyMaterial = $gltf.materials['BodyPaint'];
      if (bodyMaterial) {
        bodyMaterial.color = new Color(carColor);
        bodyMaterial.metallicness = 1.0;
        bodyMaterial.roughness = 0.34;
      }

      // Find and change the caliper material
      const caliperMaterial = $gltf.materials.Clipper;
      if (caliperMaterial) {
        caliperMaterial.color = new Color(caliperColor);
      }

      // Find and change the rim material
      const rimMaterial = $gltf.materials['Rim.002'];
      if (rimMaterial) {
        rimMaterial.color = new Color(rimColor);
        rimMaterial.metallicness = 1.0;
        rimMaterial.roughness = 0.3;
      }
    }
  });
</script>

<T.Group
  bind:ref
  dispose={false}
  {...props}
>
  {#await gltf}
    {@render fallback?.()}
  {:then gltf}
    <T.Group position={[-0.06, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes['4006'].geometry}
        material={gltf.materials['Logo.002']}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_1'].geometry}
        material={gltf.materials.Tyre}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_2'].geometry}
        material={gltf.materials['Side wall']}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_3'].geometry}
        material={gltf.materials['Dark Steel']}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_4'].geometry}
        material={gltf.materials['Wheel Brake Disk.003']}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_5'].geometry}
        material={gltf.materials['Shiny Plastic.001']}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_6'].geometry}
        material={gltf.materials.Steel}
      />
      <T.Mesh
        geometry={gltf.nodes['4006_7'].geometry}
        material={gltf.materials['Rim.002']}
      />
    </T.Group>
    <T.Group position={[-0.06, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes['4057'].geometry}
        material={gltf.materials['Logo.002']}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_1'].geometry}
        material={gltf.materials.Tyre}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_2'].geometry}
        material={gltf.materials['Side wall']}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_3'].geometry}
        material={gltf.materials['Dark Steel']}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_4'].geometry}
        material={gltf.materials['Wheel Brake Disk.003']}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_5'].geometry}
        material={gltf.materials['Shiny Plastic.001']}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_6'].geometry}
        material={gltf.materials.Steel}
      />
      <T.Mesh
        geometry={gltf.nodes['4057_7'].geometry}
        material={gltf.materials['Rim.002']}
      />
    </T.Group>
    <T.Group position={[-0.06, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes['4004'].geometry}
        material={gltf.materials['Logo.002']}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_1'].geometry}
        material={gltf.materials.Tyre}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_2'].geometry}
        material={gltf.materials['Side wall']}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_3'].geometry}
        material={gltf.materials['Dark Steel']}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_4'].geometry}
        material={gltf.materials['Wheel Brake Disk.003']}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_5'].geometry}
        material={gltf.materials['Shiny Plastic.001']}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_6'].geometry}
        material={gltf.materials.Steel}
      />
      <T.Mesh
        geometry={gltf.nodes['4004_7'].geometry}
        material={gltf.materials['Rim.002']}
      />
    </T.Group>
    <T.Group position={[-0.06, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes['4002'].geometry}
        material={gltf.materials['Logo.002']}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_1'].geometry}
        material={gltf.materials.Tyre}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_2'].geometry}
        material={gltf.materials['Side wall']}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_3'].geometry}
        material={gltf.materials['Dark Steel']}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_4'].geometry}
        material={gltf.materials['Wheel Brake Disk.003']}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_5'].geometry}
        material={gltf.materials['Shiny Plastic.001']}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_6'].geometry}
        material={gltf.materials.Steel}
      />
      <T.Mesh
        geometry={gltf.nodes['4002_7'].geometry}
        material={gltf.materials['Rim.002']}
      />
    </T.Group>
    <T.Mesh
      geometry={gltf.nodes['mycar-body'].geometry}
      material={gltf.materials['black button']}
      position={[-0.06, 0, 0]}
    >
      <T.Mesh
        geometry={gltf.nodes.Circle.geometry}
        material={gltf.materials.gril}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube004.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube006.geometry}
        material={gltf.materials['Carbon Fiber PBR Interior.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube007.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube008.geometry}
        material={gltf.materials.w}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube009.geometry}
        material={gltf.materials.w}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube010.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube014.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube015.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube016.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube019.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube020.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube021.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube022.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube023.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube024.geometry}
        material={gltf.materials.w}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube025.geometry}
        material={gltf.materials.w}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube026.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube027.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube028.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube030.geometry}
        material={gltf.materials['Head Light Led Tube']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube031.geometry}
        material={gltf.materials.chrome}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube033.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube034.geometry}
        material={gltf.materials['Head Light Led Tube.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube035.geometry}
        material={gltf.materials['gril black']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube036.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube037.geometry}
        material={gltf.materials['Tailight Led Tube.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube038.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube040.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube041.geometry}
        material={gltf.materials['Tailight Led Tube']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube042.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube043.geometry}
        material={gltf.materials.chrome}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube044.geometry}
        material={gltf.materials.chrome}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube045.geometry}
        material={gltf.materials.chrome}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube046.geometry}
        material={gltf.materials['Tailight Led Tube.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube064.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube065.geometry}
        material={gltf.materials.BodyPaint}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube066.geometry}
        material={gltf.materials.indicatores}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube071.geometry}
        material={gltf.materials.gril}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube072.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube073.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube074.geometry}
        material={gltf.materials.gril}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube075.geometry}
        material={gltf.materials.log}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube076.geometry}
        material={gltf.materials.log}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube094.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube095.geometry}
        material={gltf.materials.gril}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube096.geometry}
        material={gltf.materials['Carbon Fiber PBR Interior.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube097.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube098.geometry}
        material={gltf.materials['Carbon Fiber PBR Interior.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube105.geometry}
        material={gltf.materials['Carbon Fiber PBR Interior.001']}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube108.geometry}
        material={gltf.materials.mirror}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube109.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube112.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes.Cube175.geometry}
        material={gltf.materials.plastic}
      />
      <T.Mesh
        geometry={gltf.nodes['4036'].geometry}
        material={gltf.materials['Rough Plastic']}
      />
      <T.Mesh
        geometry={gltf.nodes['4036_1'].geometry}
        material={gltf.materials.Clipper}
      />
      <T.Mesh
        geometry={gltf.nodes['4036_2'].geometry}
        material={gltf.materials.Steel}
      />
    </T.Mesh>
  {:catch err}
    {@render error?.({ error: err })}
  {/await}

  {@render children?.({ ref })}
</T.Group>
