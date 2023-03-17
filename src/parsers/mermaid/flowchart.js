class MermaidFlowchart {
  static parse(raw) {
    const graph = {};

    const source = raw.replace(/\n/g, ';').replace('\s+', ' ');

    source.split(';').forEach(fragment => {
      if(/-->/.test(fragment)) {
        const items = fragment.split('-->')
        const a = this.parseItem(items[0]);
        const b = this.parseItem(items[1]);

        this.ensureItem(graph, a);
        this.ensureItem(graph, b);
        this.connectItems(graph, a, b, '>');
      }
    });

    return graph;
  }

  static connectItems(graph, a, b, direction) {
    graph[a.id].edges[b.id] = {
      direction: direction
    }

    graph[b.id].edges[a.id] = {
      direction: direction == '>' ? '<' : '>'
    }
  }

  static ensureItem(graph, item) {
    if(!graph[item.id]) {
      graph[item.id] = item;
    }
  }

  static parseItem(item) {
    const parsed = { edges: {} };

    if(/\[/.test(item)) {
      const parts = item.split('[');
      parsed['id'] = parts[0].trim();
      parsed['label'] = parts[1].split(']')[0].trim();
    } else {
      parsed['id'] = item.trim();
    }

    if(!parsed['label']) parsed['label'] = parsed['id'];

    return parsed;
  }
}

export default MermaidFlowchart;
