<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-json.min';
import 'prismjs/themes/prism-okaidia.css';
import 'prism-svelte';

import { onMount } from 'svelte';

export let graph;

onMount(async () => { Prism.highlightAll(); });
</script>

<div class="graph-source">
  {#if graph}
    <pre class="language-javascript"><code>{JSON.stringify(graph, false, 2)}</code></pre>
    }
  {/if}
</div>

<style>
.graph-source {
  overflow-y: scroll;
  max-height: 30em;
}
</style>
