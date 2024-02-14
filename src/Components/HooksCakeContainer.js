
import { useSelector ,useDispatch} from 'react-redux'
import { CakeAction } from "../redux/CakeAction";

const HooksCakeContainer = () => {
  const numOfcakes=  useSelector(state=> state.numOfCakes)
  const dispatch=useDispatch()
  return (
    <div>
        <h2>No. of Cakes - {numOfcakes} </h2>
        <button onClick={()=> dispatch(CakeAction())}> Add Cakes </button>
    </div>
  )
}

export default HooksCakeContainer