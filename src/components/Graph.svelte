<script>
import mermaidParser from '../parsers/mermaid/flowchart';

import Prism from 'prismjs';
import 'prismjs/components/prism-json.min';
import 'prismjs/themes/prism-okaidia.css';
import 'prism-svelte';

import { onMount } from 'svelte';

export let source;

let previousSource = undefined;

let graph;

const renderNavigator = async () => {
  if(source === previousSource) return null;

  previousSource = source;

  graph = mermaidParser.parse(source);

  setTimeout(() => { Prism.highlightAll(); }, 0);
};

onMount(async () => {
  if (source !== undefined) await renderNavigator();
});

$: if(source !== undefined) { renderNavigator(); }
</script>

<div class="graph-source">
  {#if graph}
    <pre class="language-javascript"><code>{JSON.stringify(graph, false, 2)}</code></pre>
  {/if}
</div>

<style>
.graph-source {
  overflow-y: scroll;
  max-height: 30em;
}
</style>
