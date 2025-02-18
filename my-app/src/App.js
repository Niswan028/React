import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
hai

function App() {
 
 
  return (
    <>
    <Footer />
   <Header title="Na thanda leo"/>
   <Content />
   </>
   
  );
}
Header.defaultProps={
  title:"Poda"
}
export default App;
