import './App.css';
import Header from './Components/Header/Header.js';
import TopPage from './Components/Top_Page/TopPage.js';
import './Components/Main_Body_Frontpage/MainBodyFunctions.js';
import MainBodyFrontPage from './Components/Main_Body_Frontpage/MainBodyFrontPage.js';
import Footer from './Components/Footer/Footer.js';
import './Functions.js';


function App() {
  return (
    <div className="App">
      <TopPage />
      <Header />
      <MainBodyFrontPage />
      <Footer />
    </div>
  );
}

export default App;