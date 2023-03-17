import { describe, it, expect } from 'vitest';

import parser from './flowchart';
import util from 'util';

const source = `
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
`;

describe('sum test', () => {
  it('adds 1 + 2 to equal 3', () => {

    expect(parser.parse(source)).toEqual(
      {
        A: { id: 'A', edges: { C: { direction: '>' } } },
        B: { id: 'B', edges: { D: { direction: '>' } } },
        C: { id: 'C', edges: { D: { direction: '>' } } },
        D: { id: 'D', edges: { C: { direction: '<' } } }
      }
    );
  });
});
