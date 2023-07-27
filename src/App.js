import Directory from './components/directory/directory.component';
import categories from './components/directory/categories.jsx';

const App = () => {

  return (
    <div className="App">
      <Directory categories={categories} />
    </div>);
}

export default App;
