import React, {useState} from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
function UserLogin() {
  const [login, setLogin] = useState('');

  // handleChange = e => {
  //   e.preventDefault();
  //   setLogin(e.target.value)
  // }

  return (
    <MuiThemProvider>
      <React.Fragment>
        <AppBar title="Login"/>
        <TextField
          hintText="Enter your username"
          floatingLabelText="username"
          onChange={(Event) => setLogin(Event.target.value)}
          defaultValue={login}
        />

      </React.Fragment>
    </MuiThemProvider>
  )
}

export default UserLogin;