<script>
  import mermaid from 'mermaid';

  import { onMount } from 'svelte';

  export let source;

  let previousSource = undefined;

  let mermaidContainer = undefined;

  const renderMermaid = async () => {
    if (source === previousSource) return null;

    previousSource = source;

    const { svg } = await mermaid.render('mermaid-output', source);

    mermaidContainer.innerHTML = svg;
  };

  onMount(async () => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' });

    if (source !== undefined) await renderMermaid();
  });

  $: if (source !== undefined && mermaidContainer) {
    renderMermaid();
  }
</script>

<div class="render" bind:this={mermaidContainer} />

<style>
  .render {
    margin-top: 1em;
  }
</style>
