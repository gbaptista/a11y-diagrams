<script>
import Editor from '../components/Editor.svelte';
import Navigator from '../components/Navigator.svelte';
import Diagram from '../components/Diagram.svelte';
import Graph from '../components/Graph.svelte';

import JSONExplorer from '../components/explorers/JSON.svelte';
import NodeByNodeExplorer from '../components/explorers/NodeByNode.svelte';

let source = undefined;

const onUpdate = (updatedSource) => {
  source = updatedSource;
}

</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <Editor onUpdate={onUpdate} />
    </div>
    <div class="col">
      <Graph source={source} let:graph={graph}>
        <NodeByNodeExplorer graph={graph} />
      </Graph>
    </div>
    <div class="col">
      <Diagram source={source} />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <Graph source={source} let:graph={graph}>
        <JSONExplorer graph={graph} />
      </Graph>
    </div>
    <div class="col-8">
      
    </div>
  </div>
</div>

<style>
.container-fluid {
  padding-right: 2em;
}
</style>
