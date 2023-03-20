<script>
  import Editor from '../components/Editor.svelte';
  import Diagram from '../components/Diagram.svelte';
  import Graph from '../components/Graph.svelte';

  import JSONExplorer from '../components/explorers/JSON.svelte';
  import NodeByNodeExplorer from '../components/explorers/NodeByNode.svelte';
  import LinearExplorer from '../components/explorers/LinearExplorer.svelte';
  import BreadcrumbsExplorer from '../components/explorers/Breadcrumbs.svelte';

  let source = undefined;

  const onUpdate = (updatedSource) => {
    source = updatedSource;
  };
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <Editor {onUpdate} />
      <Graph {source} let:graph>
        <JSONExplorer {graph} />
      </Graph>
    </div>
    <div class="col">
      <Graph {source} let:graph>
        <LinearExplorer {graph} />
      </Graph>
      <Graph {source} let:graph>
        <NodeByNodeExplorer {graph} />
      </Graph>
      <Graph {source} let:graph>
        <BreadcrumbsExplorer {graph} />
      </Graph>
    </div>
    <div class="col">
      <Diagram {source} />
    </div>
  </div>
  <div class="row">
    <div class="col-4" />
    <div class="col-8" />
  </div>
</div>

<style>
  .container-fluid {
    padding-right: 2em;
  }
</style>
