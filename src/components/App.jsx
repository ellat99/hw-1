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
      <h1>ex1</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <h1>ex2</h1>
        <Statistics title="Upload stats" stats={data} />
        {/* Sau fără titlu */}
        {/* <Statistics stats={data} /> */}
      </div>
      <div>
        <h1>ex4</h1>
        <TransactionHistory items={transactions} />;
      </div>
      <div>
        <h1>ex3</h1>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};

export default App;
