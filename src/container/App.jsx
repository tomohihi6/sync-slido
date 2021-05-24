import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../styles/App.css';

function App() {
  let deck;
  useEffect(() => {
    deck = new Reveal({ histroy: true, plugins: [Markdown] });
    deck.initialize();
  }, []);
  return (
    <div className="App">
      <div className="reveal" style={{ height: '90%' }}>
        <div className="slides">
          <section>テスト</section>
          <section>CDDDDD</section>
          <section>AAAAAA</section>
        </div>
      </div>
      <button
        onClick={() => {
          const state = deck.getState();
          console.log(state);
        }}>
        右へ
      </button>
    </div>
  );
}

export default App;
