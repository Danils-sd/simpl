
import './App.css';
import Asort from './components/asort/Asort';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Guaid from './components/guaid/Guaid';
import Label from './components/label/Label';
import Marks from './components/marks/Marks';
import Navbar from './components/navbar/Navbar';
import Sketch from './components/sketch/Sketch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Label/>
      <Guaid/>
      <Asort/>
      <Marks/>
      <Sketch/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
