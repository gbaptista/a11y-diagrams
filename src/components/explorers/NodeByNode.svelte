<script>
import { onMount } from 'svelte';

export let graph;

let focusNodeId = Object.keys(graph.nodes)[0];
let focusNode = graph.nodes[focusNodeId];

const goTo = (focusNodeId) => {
  focusNode = graph.nodes[focusNodeId];
}
</script>

{#if graph}
  <div class="card">
    <h5 class="card-header">Node By Node Explorer</h5>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <table class="table">
            <tbody>
              <tr>
                <th class="text-end" scope="row">Label:</th>
                <td>{focusNode.label}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">Edges:</th>
                <td>{Object.keys(focusNode.edges).length}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">ID:</th>
                <td>{focusNode.id}</td>
              </tr>
            </tbody>
          </table>    
        </div>
        <div class="col">
          {#each Object.keys(focusNode.edges) as id}
            <button
              on:click={goTo(id)}
              type="button"
              class={`${focusNode.edges[id]['direction'] == '>' ? 'btn btn-primary' : 'btn btn-secondary'}`}>
              {graph.nodes[id].label}
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
