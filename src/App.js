import CakeContainer from "./Components/CakeContainer";

import store from './redux/Store'
import { Provider } from "react-redux";

function App() {
  return (
 <Provider store={store}>
    <div className="App">
      
        <CakeContainer />
     
    </div> 
    </Provider>
  );
}

export default App;
