import './App.css';
import Header from './modules/header/header';
import Links from './modules/header/links';
import BodyContainer from './modules/body/bodyContainer';

function App() {
  return (
    <div className="App">
      <div className='header-background'>
       <Header/>
       <Links/>
      </div>
       <BodyContainer/>
    </div>
  );
}

export default App;
