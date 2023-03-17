<script>
import Editor from '../components/Editor.svelte';
import Navigator from '../components/Navigator.svelte';
import Diagram from '../components/Diagram.svelte';
import Graph from '../components/Graph.svelte';

import JSONExplorer from '../components/explorers/JSON.svelte';
import NodeByNodeExplorer from '../components/explorers/NodeByNode.svelte';
import BreadcrumbsExplorer from '../components/explorers/Breadcrumbs.svelte';

let source = undefined;

const onUpdate = (updatedSource) => {
  source = updatedSource;
}

</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <Editor onUpdate={onUpdate} />
      <Graph source={source} let:graph={graph}>
        <JSONExplorer graph={graph} />
      </Graph>
    </div>
    <div class="col">
      <Graph source={source} let:graph={graph}>
        <NodeByNodeExplorer graph={graph} />
      </Graph>
      <Graph source={source} let:graph={graph}>
        <BreadcrumbsExplorer graph={graph} />
      </Graph>
    </div>
    <div class="col">
      <Diagram source={source} />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      
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
