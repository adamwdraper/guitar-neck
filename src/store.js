import Vue from 'vue'
import Vuex from 'vuex'

import { findIndex } from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        name: 'A',
        isSharp: false
      },
      {
        name: 'A#',
        isSharp: true
      },
      {
        name: 'B',
        isSharp: false
      },
      {
        name: 'C',
        isSharp: false
      },
      {
        name: 'C#',
        isSharp: true
      },
      {
        name: 'D',
        isSharp: false
      },
      {
        name: 'D#',
        isSharp: true
      },
      {
        name: 'E',
        isSharp: false
      },
      {
        name: 'F',
        isSharp: false
      },
      {
        name: 'F#',
        isSharp: true
      },
      {
        name: 'G',
        isSharp: false
      },
      {
        name: 'G#',
        isSharp: false
      }
    ],
    scaleMeta: [
      {
        interval: {
          name: 'Perfect Unison',
          short: 'P1'
        },
        degree: {
          name: 'Root',
          short: '1'
        }
      },
      {
        interval: {
          name: 'Minor Second',
          short: 'm2'
        },
        degree: {
          name: 'Flat Second',
          short: 'b2'
        }
      },
      {
        interval: {
          name: 'Major Second',
          short: 'M2'
        },
        degree: {
          name: 'Second',
          short: '2'
        }
      },
      {
        interval: {
          name: 'Minor Third',
          short: 'm3'
        },
        degree: {
          name: 'Flat Third',
          short: 'b3'
        }
      },
      {
        interval: {
          name: 'Major Third',
          short: 'M3'
        },
        degree: {
          name: 'Third',
          short: '3'
        }
      },
      {
        interval: {
          name: 'Perfect Fourth',
          short: 'P4'
        },
        degree: {
          name: 'Forth',
          short: '4'
        }
      },
      {
        interval: {
          name: 'Diminished Fifth',
          short: 'd5'
        },
        degree: {
          name: 'Flat Fifth',
          short: 'b5'
        }
      },
      {
        interval: {
          name: 'Perfect Fifth',
          short: 'P5'
        },
        degree: {
          name: 'Fifth',
          short: '5'
        }
      },
      {
        interval: {
          name: 'Minor Sixth',
          short: 'm6'
        },
        degree: {
          name: 'Flat Sixth',
          short: 'b6'
        }
      },
      {
        interval: {
          name: 'Major Sixth',
          short: 'M6'
        },
        degree: {
          name: 'Sixth',
          short: '6'
        }
      },
      {
        interval: {
          name: 'Minor Seventh',
          short: 'm7'
        },
        degree: {
          name: 'Flat Seventh',
          short: 'b7'
        }
      },
      {
        interval: {
          name: 'Major Seventh',
          short: 'M7'
        },
        degree: {
          name: 'Seventh',
          short: '7'
        }
      }
    ],
    scalePatterns: {
      major: [
        0,
        2,
        4,
        5,
        7,
        9,
        11
      ],
      minor: [
        0,
        2,
        3,
        5,
        7,
        8,
        10
      ]
    },
    fretCount: 22,
    tuning: null,
    noteGrid: null,
    focus: null,
    root: null,
    scale: null
  },
  getters: {
    getRootScale: state => {
      if (!state.root) {
        return [];
      }

      const pattern = state.scalePatterns[state.scale];
      const rootIndex = findIndex(state.notes, n => n.name === state.root.name);
      const notes = [...state.notes.slice(rootIndex), ...state.notes.slice(0, rootIndex)];

      return pattern.map(i => ({
        ...notes[i],
        meta: state.scaleMeta[i]
      }));
    }
  },
  mutations: {
    setNoteGrid(state, noteGrid) {
      state.noteGrid = noteGrid;
    },
    setTuning(state, tuning) {
      state.tuning = tuning;
    },
    setFocus(state, note) {
      state.focus = note;
    },
    setParams(state, params) {
      state.root = params.root;

      state.scale = params.scale;
    }
  },
  actions: {

  }
})
