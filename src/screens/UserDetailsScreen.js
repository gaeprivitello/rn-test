import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { List, Avatar } from 'react-native-paper';

import colors from "../constants/colors";
import { getUserDetails } from "../api/usersApi";

export const UserDetailsScreen = ({ route }) => {

  const { username } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserDetails(username).then((res) => setUser(res.data))
  }, []);

  return (
    <View style={styles.container}>
      {
        user ?
          <List.Item
            title={user.name}
            titleStyle={{fontWeight : 'bold'}}
            description={user.location}
            left={() => <Avatar.Image size={50} source={{ uri: user.avatar_url }} />}
          />
          : <Text>Loading...</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  }
});
