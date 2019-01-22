import Vue from 'vue'
import Vuex from 'vuex'

import { notes, intervals } from '@/config/notes.js';
import tunings from '@/config/tunings.js';
import scales from '@/config/scales.js';
import chords from '@/config/chords.js';

import { find, findIndex, toLower, get } from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes,
    intervals,
    tunings,
    modes: {
      scales,
      chords
    },
    fretCount: 22,
    params: null,
    tuning: null,
    noteGrid: null,
    root: null,
    mode: null,
    pattern: null,
    display: null,
    selector: null
  },
  getters: {
    getParams(state) {
      return state.params;
    }
  },
  mutations: {
    setNoteGrid(state, noteGrid) {
      state.noteGrid = noteGrid;
    },
    setTuning(state, tuning) {
      state.tuning = tuning;
    },
    setSelector(state, selector) {
      state.selector = selector;
    },
    setParams(state, data) {
      const params = {
        root: toLower(get(data, 'root', 'c')),
        mode: toLower(get(data, 'mode', 'scale')),
        pattern: toLower(get(data, 'pattern', 'major')),
        tuning: toLower(get(data, 'tuning', 'standard')),
        display: toLower(get(data, 'display', 'notes'))
      };

      // generate pattern notes
      const root = find(state.notes, note => note.id === params.root);
      const pattern = find(get(state, `modes.${params.mode}s`), pattern => pattern.id === params.pattern);
      const rootIndex = findIndex(state.notes, n => n.id === root.id);
      const notes = [...state.notes.slice(rootIndex), ...state.notes.slice(0, rootIndex)];
      const notesInPattern = [0];
      let semitones = 0;

      // generate list of indexes for notes in the pattern
      for (let i = 0;  i < pattern.semitones.length; i++) {
        semitones += pattern.semitones[i];

        notesInPattern.push(semitones);
      }

      // add notes for pattern
      pattern.notes = [];

      for (let i = 0; i < notes.length; i++) {
        pattern.notes.push({
          ...notes[i],
          interval: state.intervals[i],
          isInPattern: notesInPattern.includes(i)
        });
      }

      // set param objects
      state.params = params;
      state.root = root;
      state.mode = params.mode;
      state.display = params.display;
      state.tuning = params.tuning;
      state.pattern = Object.assign({}, pattern);
    }
  },
  actions: {}
})
