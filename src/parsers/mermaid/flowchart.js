class MermaidFlowchart {
  static parse(raw) {
    const nodes = {};

    const source = raw.replace(/\n/g, ';').replace('\s+', ' ');

    source.split(';').forEach(fragment => {
      if(/-->/.test(fragment)) {
        const items = fragment.split('-->')
        const a = this.parseItem(items[0]);
        const b = this.parseItem(items[1]);

        this.ensureItem(nodes, a);
        this.ensureItem(nodes, b);
        this.connectItems(nodes, a, b, '>');
      }
    });

    return { nodes: nodes };
  }

  static connectItems(nodes, a, b, direction) {
    nodes[a.id].edges[b.id] = {
      direction: direction
    }

    nodes[b.id].edges[a.id] = {
      direction: direction == '>' ? '<' : '>'
    }
  }

  static ensureItem(nodes, item) {
    if(!nodes[item.id]) {
      nodes[item.id] = item;
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
