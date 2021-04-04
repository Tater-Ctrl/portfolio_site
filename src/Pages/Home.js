import MainBodyFrontPage from '../Components/Main_Body_Frontpage/MainBodyFrontPage.js';
import Header from '../Components/Header/Header.js';
import TopPage from '../Components/Top_Page/TopPage.js';
import Footer from '../Components/Footer/Footer.js';
import '../Functions.js';

export default function Home() {
  return (
    <div className="App">
        <TopPage />
        <Header />
        <MainBodyFrontPage />
        <Footer />
    </div>
  );
}