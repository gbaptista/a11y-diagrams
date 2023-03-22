<script>
  export let graph;

  let focusNodeId = Object.keys(graph.nodes)[0];
  let navHistory = [Object.keys(graph.nodes)[0]];

  let selectedNode = undefined;

  const goTo = (newFocusNodeId) => {
    if (isValidNextNode(newFocusNodeId)) {
      navHistory.push(newFocusNodeId);
      focusNodeId = newFocusNodeId;
    }
  };

  const back = () => {
    let previousNodeId = getPreviousNode();
    goTo(previousNodeId);
    navHistory.pop();
    navHistory.pop();
  };

  const getPreviousNode = () => {
    return navHistory[navHistory.length - 2];
  };

  const isValidNextNode = (newFocusNodeId) => {
    if (newFocusNodeId == undefined) {
      //alert (newFocusNodeId);
      return false;
    }
    return true;
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
        back();
        break;
      case 'ArrowRight':
        goTo(selectedNode);
        break;
      default:
        break;
    }
  };

  const edgesWithoutPrevious = (focusNodeId) => {
    const edges = graph.nodes[focusNodeId].edges;
    return Object.keys(edges).filter((edgeId) => {
      return edgeId != getPreviousNode();
    });
  };
</script>

{#if graph}
  <div class="card">
    <h5 class="card-header">Linear Explorer</h5>
    <div class="card-body">
      <label for="edges" aria-label="{graph.nodes[focusNodeId].label} node. Select direction"
        >{graph.nodes[focusNodeId].label}</label
      >
      <select bind:value={selectedNode} on:keydown={handleKeyDown} id="edges" class="form-select">
        {#each edgesWithoutPrevious(focusNodeId) as edgeId}
          <option value={edgeId}>{graph.nodes[edgeId].label}</option>
        {/each}
      </select>
      <label for="history">Navigation History</label>
      <select id="history">
        {#each navHistory as edgeId}
          <option>{graph.nodes[edgeId].label}</option>
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
