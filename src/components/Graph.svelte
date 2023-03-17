<script>
  import mermaidParser from '../parsers/mermaid/flowchart';

  import { onMount } from 'svelte';

  export let source;

  let previousSource = undefined;

  let graph;

  const renderNavigator = async () => {
    if (source === previousSource) return null;

    previousSource = source;

    graph = mermaidParser.parse(source);
  };

  onMount(async () => {
    if (source !== undefined) await renderNavigator();
  });

  $: if (source !== undefined) {
    renderNavigator();
  }
</script>

{#if graph !== undefined}
  <slot {graph} />
{/if}
