<script>
  import { onMount } from 'svelte';

  export let onUpdate;
  let editorContainer = undefined;

  const preventBrowserSave = () => {
    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey || event.metaKey) {
        if (event.key === 's' || event.key === 'S') {
          event.preventDefault();
        }
      }
    });
  };

  onMount(async () => {
    preventBrowserSave();

    const monaco = await import('monaco-editor');

    const response = await fetch('/samples/mermaid/sample-a.mmd');
    const source = await response.text();

    const editor = monaco.editor.create(editorContainer, {
      theme: 'vs-dark',
      value: source,
      // language: 'javascript',
      minimap: { enabled: false },
      fontSize: '20px',
      automaticLayout: true
    });

    editor.addAction({
      id: 'render-source',
      label: 'Render Source',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
        monaco.KeyMod.MetaCmd | monaco.KeyCode.KeyS
      ],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run() {
        onUpdate(editor.getValue());
        return null;
      }
    });

    editor.onDidChangeModelContent(() => {
      onUpdate(editor.getValue());
    });

    onUpdate(source);
  });
</script>

<div>
  <div class="editor" bind:this={editorContainer} />
</div>

<style>
  .editor {
    height: 30em;
  }
</style>
