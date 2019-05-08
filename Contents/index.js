import React, { Component } from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Icon } from 'react-native-material-ui';


import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodayView from './today';
import ProfileView from './profile';
import MapView from './map';
import ChatView from './chat';

class TabIcon extends Component {
  render() {
    const title = this.props.title;
    let icon = "";
    if (title == "Today") {
      icon = "today";


    } else if (title == "Profile") {
      icon = "person";
    } else if (title == "Map") {
      icon = "map";
    } else if (title == "Chat") {
      icon = "chat"
    }
    return (
      <Icon name={icon} size={30}
      />
    );
  }
}




const App = () => {

  return (
    <Router navigationBarStyle={{ backgroundColor: '#81b71a' }} titleStyle={{ color: 'white', fontSize: 30 }}
    >
      <Scene key="root">

        <Scene
          key="drawer"
          drawer={true}
          hideNavBar
          barButtonIconStyle={{ tintColor: 'white' }}


        >

          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#ffffff' }}


            hideNavBar

          >



            {/* Tab and it's scenes */}

            <Scene key="today" title="Today" tabs={true} component={TodayView} icon={TabIcon} />

            <Scene key="profile" title="Profile" tabs={true} component={ProfileView} icon={TabIcon} />

            <Scene key="map" title="Map" tabs={true} component={MapView} icon={TabIcon} />


            <Scene key="chat" title="Chat" tabs={true} component={ChatView} icon={TabIcon} />




          </Scene>


        </Scene>

      </Scene>
    </Router>

  );
}




export default App;



