import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
    return (
       <View style={style.form}>
        <Text>Nome:</Text>
        <TextInput
            style= {style.input}
            onChangeText={name => setUser({...user, name})}
            placeholder='Informe o nome'
            value={user.name}
        />
        <Text>Email:</Text>
        <TextInput
            style= {style.input}
            onChangeText={email => setUser({...user, email})}
            placeholder='Informe o E-mail'
            value={user.email}
        />
        <Text>Url do avatar:</Text>
        <TextInput
            style= {style.input}
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder='Informe a url do avatar.'
            value={user.avatarUrl}
        />
        <Button
          title='Salvar'
          onPress={()=> {
            navigation.goBack()
          }}
        />
       </View>
  );
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }
})