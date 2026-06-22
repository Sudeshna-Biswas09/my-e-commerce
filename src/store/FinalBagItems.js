import { useSelector } from 'react-redux';

export const useFinalBagItems = () => {
  const bagItems = useSelector(store => store.bag);
  const allItems = useSelector(store => store.items);
  const finalItems = allItems.filter(item => bagItems.includes(item.id));
  return finalItems;
};
