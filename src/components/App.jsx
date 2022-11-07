import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import '../index.css';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div className="app">
      <div>
        <Profile {...user} />
      </div>
      <div className="stats">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
