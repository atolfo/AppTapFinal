//navegacao por cliques em botao, mas tem por abas, menu lateral, etc.
import { createStackNavigator } from 'react-navigation';
import Main from './pages/main/main'; 
import Details from './pages/details/details'; 
import Insert from './pages/insert/insert'; 
import Update from './pages/update/update'; 

export default createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
          title: 'Eventos',
          headerStyle: { backgroundColor: '#fec503' },
          headerTintColor: '#212926',
        },
    },
      Details: {
        screen: Details,
        navigationOptions: {
          title: 'Detalhes',
          headerStyle: { backgroundColor: '#fec503' },
          headerTintColor: '#212926',
        },
      },
      Insert: {
        screen: Insert,
        navigationOptions: {
          title: 'Inserir',
          headerStyle: { backgroundColor: '#fec503' },
          headerTintColor: '#212926',
        },
      },
      Update: {
        screen: Update,
        navigationOptions: {
          title: 'Atualizar',
          headerStyle: { backgroundColor: '#fec503' },
          headerTintColor: '#212926',
        },
      },
    });