// UserList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import UserCard from '../components/UserCards';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?per_page=12')
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User List</Text>
      <ScrollView>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
