<script>
import { onMount } from 'svelte';

export let graph;

let breadcrumbs = [];

const buildBreadcrumbs = () => {
  Object.keys(graph.nodes).forEach(nodeId => {
    let path = graph.nodes[nodeId].label;

    Object.keys(graph.nodes[nodeId].edges).forEach(edgeId => {
      const edge = graph.nodes[nodeId].edges[edgeId];
      if(edge.direction !== '<') {
        path = `${path} ${edge.direction} ${graph.nodes[edgeId].label}`;
        breadcrumbs.push(path);
        path = graph.nodes[nodeId].label;
      }
    });
  })
}

buildBreadcrumbs();

</script>

{#if graph}
  <div class="card">
    <h5 class="card-header">Breadcrumbs Explorer</h5>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <table class="table">
            <tbody>
              {#each breadcrumbs as path}
                <tr>
                  <td>{path}</td>
                </tr>
              {/each}
            </tbody>
          </table>    
        </div>
      </div>  
    </div>
  </div>
{/if}


<style>
.card {
  margin-top: 2em;
}
</style>
