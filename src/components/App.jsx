import Profile from './profile/Profile';

import user from './user.json';

import Statistics from './statistics/Statistics';
import data from './data.json';
import FriendList from './friendlist/FriendList';
import friends from './friends.json';
import TransactionHistory from './transactionhistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* Sau fără titlu */}
        {/* <Statistics stats={data} /> */}
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
};

export default App;
