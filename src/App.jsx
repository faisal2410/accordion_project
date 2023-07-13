
import faqs from "./data/faq.js"
import Accordion from "./components/accordion/Accordion.jsx";


const App=()=> {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;