import React, { useContext } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Avatar, Button, Icon } from '@rneui/base';
import UsersContext from '../context/UsersContext';


export default (props) => {

  const {state, dispatch} = useContext(UsersContext);

  function confirmeUserRemove(user){
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress(){
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        }
      },
      {
        text: 'Não'
      }
    ])
  }

  function getActions(user){
    return(
      <>
        <Button 
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type='clear'
          icon={<Icon name='edit' size={20} color="orange"/>}
        />
        <Button 
          onPress={() => {
            confirmeUserRemove(user);
          }}
          type='clear'
          icon={<Icon name='delete' size={20} color="red"/>}
        />
      </>
    )
  }

  function getUserItem({ item: user }){
    return(
          <ListItem bottomDivider
          onPress={() => props.navigation.navigate('UserForm')}
          >
            
            <Avatar
              source={{uri: user.avatarUrl}}
            />      
            <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem color="black">{getActions(user)}</ListItem>
          </ListItem>
      )
  }

    return (
       <View>
        <FlatList
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={getUserItem}
        />

       </View>
  );
}