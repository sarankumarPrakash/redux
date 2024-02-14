import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import store from './redux/Store'
import { Provider } from "react-redux";

function App() {
  return (
 <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
        <CakeContainer />
     
    </div> 
    </Provider>
  );
}

export default App;
