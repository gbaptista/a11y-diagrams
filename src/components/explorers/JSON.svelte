<script>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-json.min';
  import 'prismjs/themes/prism-okaidia.css';
  import 'prism-svelte';

  import { onMount } from 'svelte';

  export let graph;
  let codeElement = undefined;

  const updateCode = () => {
    if (codeElement) {
      codeElement.innerHTML = Prism.highlight(
        JSON.stringify(graph, false, 2),
        Prism.languages.javascript,
        'javascript'
      );
    }
  };

  onMount(async () => {
    updateCode();
  });

  $: {
    if (graph) updateCode();
  }
</script>

<div class="graph-source">
  {#if graph}
    <pre class="language-javascript"><code bind:this={codeElement} /></pre>
    }
  {/if}
</div>

<style>
  .graph-source {
    overflow-y: scroll;
    max-height: 30em;
  }
</style>
