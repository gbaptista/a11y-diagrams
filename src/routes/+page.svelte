<script>
import Editor from '../components/Editor.svelte';
import Navigator from '../components/Navigator.svelte';
import Diagram from '../components/Diagram.svelte';
import Graph from '../components/Graph.svelte';

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
      <Navigator source={source} />
    </div>
    <div class="col">
      <Diagram source={source} />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <Graph source={source} />
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
