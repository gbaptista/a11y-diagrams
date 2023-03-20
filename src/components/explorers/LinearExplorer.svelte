<script>
    export let graph;
  
    let focusNodeId = Object.keys(graph.nodes)[0];
  
    const goTo = (newFocusNodeId) => {
      focusNodeId = newFocusNodeId;
    };

    const handleKeyDown = (event) => {
        const edges = Object.keys(graph.nodes[focusNodeId].edges);

        switch (event.key) {
        case 'ArrowUp':
            goTo(edges[0]);
            break;
        case 'ArrowDown':
            goTo(edges[0]);
            break;
        case 'ArrowLeft':
            console.log('Seta para esquerda pressionada');
            break;
        case 'ArrowRight':
            console.log('Seta para direita pressionada');
            break;
        default:
            break;
        }
    }
  </script>
  
  {#if graph}
    <div class="card">
      <h5 class="card-header">Linear Explorer</h5>
      <div class="card-body">
        <button aria-live="polite" on:keydown={handleKeyDown} tabindex="0" type="button" class="btn btn-primary">
            {graph.nodes[focusNodeId].label}
        </button>
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
  