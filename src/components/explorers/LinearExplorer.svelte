<script>
    export let graph;
  
    let focusNodeId = Object.keys(graph.nodes)[0];
  
    const goTo = (newFocusNodeId) => {
      focusNodeId = newFocusNodeId;
    };
  </script>
  
  {#if graph}
    <div class="card">
      <h5 class="card-header">Linear Explorer</h5>
      <div class="card-body">
        <button tabindex="0" type="button" class="btn btn-primary">Linear Explorer</button>
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
  