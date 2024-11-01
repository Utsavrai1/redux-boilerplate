import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../redux/features/icecream/iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No Of icecreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock icecreams</button>
    </div>
  );
};

export default IceCreamView;
