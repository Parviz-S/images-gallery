import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => { //function App()
  const [word, setState] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setState={setState} handleSearch={ handleSearchSubmit }/>
    </div>
  );
}

export default App;
