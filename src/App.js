import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserFirestoreDocument } from './firebase/firebase.utils';
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserFirestoreDocument(userAuth);
      if (userAuth) {
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
        // this.setState({ currentUser: user });
        // console.log();
      }
    });
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
