import './App.css';
import Feed from './js/Feed';
import Header from './js/Header';
import Login from './js/Login';
import Sidebar from './js/Sidebar';
import Widgets from './js/Widgets';

function App() {
  const user = "ksdjf";
  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ):
        (
          <>
            <Header/>
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets/>
            </div>
            
          </>
        )
      }
      
    </div>
  );
}

export default App;
