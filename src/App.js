/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser })
  }

  calculateAccountBalance = () => {
    const totalCredits = this.state.creditList.reduce((acc, credit) => acc + parseFloat(credit.amount), 0);
    const totalDebits = this.state.debitList.reduce((acc, debit) => acc + parseFloat(debit.amount), 0);
    return totalCredits - totalDebits;  // Return as float
  }

  componentDidMount() {
    // Fetch credit data from API and update state
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then(response => response.json())
      .then(data => {
        const creditsFromAPI = data.map(item => ({
          ...item,
          amount: parseFloat(item.amount).toFixed(2)
        }));
        this.setState({ creditList: creditsFromAPI }, () => {
          const newAccountBalance = this.calculateAccountBalance();
          this.setState({ accountBalance: parseFloat(newAccountBalance).toFixed(2) });
        });
      })
      .catch(error => console.error('Error fetching credits:', error));

    // Fetch debit data from API and update state
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => {
        const debitsFromAPI = data.map(item => ({
          ...item,
          amount: parseFloat(item.amount)
        }));
        this.setState({ debitList: debitsFromAPI }, () => {
          const newAccountBalance = this.calculateAccountBalance();
          this.setState({ accountBalance: parseFloat(newAccountBalance).toFixed(2) });
        });
      })
      .catch(error => console.error('Error fetching debits:', error));
  }

  addCredit = (credit) => {
    const newAmount = parseFloat(credit.amount);
    const newCredit = { ...credit, amount: newAmount };

    this.setState({ creditList: [...this.state.creditList, newCredit] }, () => {
      const newAccountBalance = this.calculateAccountBalance();
      this.setState({ accountBalance: newAccountBalance });
    });
  }

  addDebit = (debit) => {
    const newAmount = parseFloat(debit.amount);
    const newDebit = { ...debit, amount: newAmount };

    this.setState({ debitList: [...this.state.debitList, newDebit] }, () => {
      const newAccountBalance = this.calculateAccountBalance();
      this.setState({ accountBalance: newAccountBalance });
    });
  }

  render() {
    // Create React elements and pass input props to components
    const accountBalance = this.calculateAccountBalance(); // Calculate account balance
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (
      <Credits
        credits={this.state.creditList}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    )
    const DebitsComponent = () => (
      <Debits
        debits={this.state.debitList}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    )

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/assignment3-bank-of-react">
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;