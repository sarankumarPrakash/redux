import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import store from './redux/Store'
import { Provider } from "react-redux";
import IceCream from './Components/IceCream'
function App() {
  return (
 <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
        <CakeContainer />
        <IceCream/>
     
    </div> 
    </Provider>
  );
}

export default App;
