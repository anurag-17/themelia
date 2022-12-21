import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Platformtab from './component/Platformtab';
import Bignews from './component/Bignews';
import Faq from './component/Faq';
import Testimonal from './component/Testimonal';
import Footer from './component/Footer';
import Menu from './component/Menu';
import NewTab from './component/NewTab';

function App() {
  return (
    <div>
      <Menu/>
      <Banner/>
      {/* <NewTab/> */}
      <Platformtab/>
      <Bignews/>
      <Faq/>
      <Testimonal/>
      <Footer/>     
       
      </div>
  );
}

export default App;
