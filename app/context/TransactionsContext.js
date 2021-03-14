import React, {useState, useCallback} from 'react';
import TransactionsData from '../dummyData/dummyData';

const transactionsDataContext = TransactionsData.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
).map(e => {
  e.id = String(e.id);
  return e;
});
const TContext = React.createContext();

const TProvider = ({children}) => {
  const [transactions, setTransactions] = useState(transactionsDataContext);

  const transactionsReceipt = useCallback(
    (id, url) => {
      const index = transactions.findIndex(item => item.id === id);
      setTransactions(() => {
        const updated = [...transactions];
        updated[index].receipt_url = url;
        return updated;
      });
    },
    [transactions, setTransactions],
  );
  return (
    <TContext.Provider
      value={{
        transactions,
        transactionsReceipt,
      }}>
      {children}
    </TContext.Provider>
  );
};

export {TProvider, TContext};
