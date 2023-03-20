<script>
    export let graph;
  
    let focusNodeId = Object.keys(graph.nodes)[0];
    let edges = graph.nodes[focusNodeId].edges;
  
    const goTo = (newFocusNodeId) => {
      focusNodeId = newFocusNodeId;
    };

    const handleKeyDown = (event) => {
        // switch (event.key) {
        // case 'ArrowUp':
        //     // if(possibleNodeIndex > 0) possibleNodeIndex -= 1;
        //     break;
        // case 'ArrowDown':
        //     // if(possibleNodeIndex > (0)) possibleNodeIndex += 1;
        //     break;
        // case 'ArrowLeft':
        //     console.log('Seta para esquerda pressionada');
        //     break;
        // case 'ArrowRight':
        //     console.log('Seta para direita pressionada');
        //     break;
        // default:
        //     break;
        // }
    }
  </script>
  
  {#if graph}
    <div class="card">
      <h5 class="card-header">Linear Explorer</h5>
      <div class="card-body">
        <label for="edges">{graph.nodes[focusNodeId].label}</label>
        <select aria-live="polite" on:keydown={handleKeyDown} id="edges" class="form-select" >
            {#each Object.keys(edges) as edgeId}
                <option value={edgeId}>{graph.nodes[edgeId].label}</option>
            {/each}
        </select>

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
  