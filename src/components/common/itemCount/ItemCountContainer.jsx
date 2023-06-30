
import { useCount } from "../../hooks/useCount";
import { ItemCount } from "./ItemCount";

export const ItemCountContainer = ({stock, initial, onAdd}) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return <ItemCount count={count} decrement={decrement} increment={increment} onAdd={onAdd} />;
};
