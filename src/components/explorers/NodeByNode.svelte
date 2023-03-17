<script>
  export let graph;

  let focusNodeId = Object.keys(graph.nodes)[0];

  const goTo = (newFocusNodeId) => {
    focusNodeId = newFocusNodeId;
  };
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
                <td>{graph.nodes[focusNodeId].label}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">Edges:</th>
                <td>{Object.keys(graph.nodes[focusNodeId].edges).length}</td>
              </tr>
              <tr>
                <th class="text-end" scope="row">ID:</th>
                <td>{graph.nodes[focusNodeId].id}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          {#each Object.keys(graph.nodes[focusNodeId].edges) as id}
            <button
              on:click={goTo(id)}
              type="button"
              class={`${
                graph.nodes[focusNodeId].edges[id]['direction'] == '>'
                  ? 'btn btn-primary'
                  : 'btn btn-secondary'
              }`}
            >
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
    margin: 0.5em;
  }
</style>
