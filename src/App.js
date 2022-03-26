import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import QuestionAnswer from './Component/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
