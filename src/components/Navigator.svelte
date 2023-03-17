<script>
import mermaidParser from '../parsers/mermaid/flowchart';

import { onMount } from 'svelte';

export let source;

let previousSource = undefined;

let graph;

let nodeKey = undefined;
let node = undefined;

const renderNavigator = async () => {
  if(source === previousSource) return null;

  previousSource = source;

  graph = mermaidParser.parse(source);

  if(nodeKey === undefined || !graph[nodeKey]) {
    nodeKey = Object.keys(graph)[0];
    node = graph[nodeKey];
  }
};

const goTo = (nodeKey) => {
  node = graph[nodeKey];
}

onMount(async () => {
  if (source !== undefined) await renderNavigator();
});

$: if(source !== undefined) { renderNavigator(); }
</script>

{#if graph}
  <div class="card">
    <h5 class="card-header">Current Node</h5>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <table class="table">
            <tbody>
              <tr>
                <th class="text-end" scope="row">Label:</th>
                <td>{node.label}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">Edges:</th>
                <td>{Object.keys(node.edges).length}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">ID:</th>
                <td>{node.id}</td>
              </tr>
            </tbody>
          </table>    
        </div>
        <div class="col">
          {#each Object.keys(node.edges) as key}
            <button
              on:click={goTo(key)}
              type="button"
              class={`${node.edges[key]['direction'] == '>' ? 'btn btn-primary' : 'btn btn-secondary'}`}>
              {graph[key].label}
            </button>
          {/each}
        </div>
      </div>  
    </div>
  </div>
{/if}


<style>
.card {
  margin-top: 2em;
}

button {
  margin: .5em;
}
</style>
