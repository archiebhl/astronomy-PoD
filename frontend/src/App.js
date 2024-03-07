import './App.css';
import TitleSection from './components/title-section/TitleSection';
function App() {
  const notes = String.raw`
  [insert json data here]
  `
  return (
    <div className="App">
      <div className="flexbox">
        <TitleSection/>
        <article>
          <pre>{notes}</pre>
        </article>
      </div>
    </div>
  );
}

export default App;
