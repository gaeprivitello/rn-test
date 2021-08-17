import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import colors from '../constants/colors';
import { getUsers } from '../api/usersApi';

export const HomeScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {
        !isLoading ?
          <View style={{marginHorizontal : 25}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}  >
              <Text style={{ fontSize : 28, fontWeight : 'bold', marginVertical : 5}} >{`Top ${users.length} GitHub Users`}</Text>
              <Text style={{ fontSize : 18, marginBottom : 15}} >Tap the usarname to see more information</Text>
            </View>
            <View style={{ flexDirection: 'row',  flexWrap: 'wrap' }} >
              {users.map((user,index) => {
                return <Button key={`${user}-${index}`} style={{ margin: 5, }} icon="account" mode="contained" onPress={() => navigation.push('UserDetails',{ username: user})}>
                  {user}
                </Button>
              })}
            </View>
          </View>
          :
          <Text>Loading...</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});
