// UserCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
};

const UserCard = ({ avatar, first_name, last_name, email }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{last_name}</Text> {first_name}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
  },
});
