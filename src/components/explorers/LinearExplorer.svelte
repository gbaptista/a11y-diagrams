<script>
    export let graph;
  
    let focusNodeId = Object.keys(graph.nodes)[0];
  
    const goTo = (newFocusNodeId) => {
      focusNodeId = newFocusNodeId;
    };
  </script>
  
  {#if graph}
    <div class="card" tabindex="0">
      <h5 class="card-header">Linear Explorer</h5>
      <div class="card-body">
        
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
  