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
};

onMount(async () => {
  if (source !== undefined) await renderNavigator();
});

$: if(source !== undefined) { renderNavigator(); }
</script>

{#if graph !== undefined}
  <slot graph={graph}></slot>
{/if}
