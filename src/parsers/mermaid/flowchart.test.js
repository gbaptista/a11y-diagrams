import { describe, it, expect } from 'vitest';

import parser from './flowchart';

describe('parser test', () => {
  it('parses mermaid to agJSON', () => {
    const source = `
      graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
      `;

    const parsed = {
      nodes: {
        A: {
          edges: { B: { direction: '>' }, C: { direction: '>' } },
          id: 'A',
          label: 'A'
        },
        B: {
          edges: { A: { direction: '<' }, D: { direction: '>' } },
          id: 'B',
          label: 'B'
        },
        C: {
          edges: { A: { direction: '<' }, D: { direction: '>' } },
          id: 'C',
          label: 'C'
        },
        D: {
          edges: { B: { direction: '<' }, C: { direction: '<' } },
          id: 'D',
          label: 'D'
        }
      }
    };

    expect(parser.parse(source)).toEqual(parsed);
  });
});
