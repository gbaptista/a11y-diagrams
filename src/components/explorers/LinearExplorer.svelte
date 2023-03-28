<script>
  export let graph;

  let focusNodeId = Object.keys(graph.nodes)[0];
  let navHistory = [Object.keys(graph.nodes)[0]];

  let selectedNode = undefined;

  const isValidNextNode = (newFocusNodeId) => {
    if (newFocusNodeId === null || newFocusNodeId === undefined) {
      return false;
    }
    return true;
  };

  const goTo = (newFocusNodeId) => {
    if (isValidNextNode(newFocusNodeId)) {
      navHistory.push(newFocusNodeId);
      focusNodeId = newFocusNodeId;
      navHistory = navHistory;
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
      <h6>Instructions</h6>

      <ul>
        <li>
          Use the <kbd>TAB</kbd> key to focus on the first element of the graph.
        </li>
        <li>
          Use the <kbd>UP</kbd> and <kbd>DOWN</kbd> arrow keys to navigate and explore the connections
          with the current focused node.
        </li>
        <li>
          Use the <kbd>RIGHT</kbd> arrow key to move to the selected connection.
        </li>
        <li>
          Use the <kbd>LEFT</kbd> arrow key to go back to the previous node.
        </li>
      </ul>

      <br />

      <label for="edges" aria-label={`${graph.nodes[focusNodeId].label} node. Select direction`}>
        {graph.nodes[focusNodeId].label}
      </label>
      <select bind:value={selectedNode} on:keydown={handleKeyDown} id="edges" class="form-select">
        {#if edgesWithoutPrevious(focusNodeId).length === 0}
          <option value={null}>There are no more connections to explore from here.</option>
        {:else}
          {#each edgesWithoutPrevious(focusNodeId) as edgeId}
            <option value={edgeId}>{graph.nodes[edgeId].label}</option>
          {/each}
        {/if}
      </select>

      <br />

      <label for="history">Navigation History</label>
      <select id="history" class="form-select">
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
