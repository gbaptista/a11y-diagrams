<script>
    export let graph;
  
    let focusNodeId = Object.keys(graph.nodes)[0];
    let previousNodeId = undefined;

    let selectedNode = undefined;
  
    const goTo = (newFocusNodeId) => {
        previousNodeId = focusNodeId;
        focusNodeId = newFocusNodeId;
    };

    const handleKeyDown = (event) => {
        switch (event.key) {
        // case 'ArrowUp':
        //     // if(possibleNodeIndex > 0) possibleNodeIndex -= 1;
        //     break;
        // case 'ArrowDown':
        //     // if(possibleNodeIndex > (0)) possibleNodeIndex += 1;
        //     break;
        case 'ArrowLeft':
            goTo(previousNodeId);
            break;
        case 'ArrowRight':
           goTo(selectedNode);
            break;
        default:
            break;
        }
    }

    const edgesWithoutPrevious = (focusNodeId) => {
        const edges = graph.nodes[focusNodeId].edges;
        return Object.keys(edges).filter((edgeId) => {
            return edgeId != previousNodeId;
        });
    }
  </script>
  
  {#if graph}
    <div class="card">
      <h5 class="card-header">Linear Explorer</h5>
      <div class="card-body">
        <label for="edges" aria-live="polite">{graph.nodes[focusNodeId].label}</label>
        <select bind:value={selectedNode} aria-live="polite" on:keydown={handleKeyDown} id="edges" class="form-select" >
            {#each edgesWithoutPrevious(focusNodeId) as edgeId}
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
  </style>
  