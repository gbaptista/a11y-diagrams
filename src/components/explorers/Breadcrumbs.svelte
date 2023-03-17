<script>
  export let graph;

  let breadcrumb = {
    at: performance.now(),
    paths: []
  };

  const buildBreadcrumbs = () => {
    breadcrumb.paths = [];

    Object.keys(graph.nodes).forEach((nodeId) => {
      let path = graph.nodes[nodeId].label;

      Object.keys(graph.nodes[nodeId].edges).forEach((edgeId) => {
        const edge = graph.nodes[nodeId].edges[edgeId];
        if (edge.direction !== '<') {
          path = `${path} ${edge.direction} ${graph.nodes[edgeId].label}`;
          breadcrumb.paths.push(path);
          path = graph.nodes[nodeId].label;
        }
      });
    });

    breadcrumb.at = performance.now();
  };

  $: {
    if (graph) buildBreadcrumbs();
  }
</script>

{#if graph}
  <div class="card">
    <h5 class="card-header">Breadcrumbs Explorer</h5>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <table class="table">
            <tbody>
              {#each breadcrumb.paths as path}
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
