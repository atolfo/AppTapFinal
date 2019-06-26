import React, { Component } from "react";
import { Image,Dimensions,ImageBackground,View, Text, FlatList, Alert, TouchableOpacity, StyleSheet } from "react-native";
import api from '../../services/services';
import styles from '../styles/style';

let {height,width}=Dimensions.get('window')

export default class Main extends Component {
    static navigationOptions = {
        title: "Off-Road"
    };
 
    state = {
        reciboInfo: {},
        recibos: [],
        page: 1
    }

    componentDidMount() {
        this.loadRecibos();
    }

    loadRecibos = async (page = 1) => {

        const response = await api.get(`/recibos?page=${page}`);
        const { docs, ...reciboInfo } = response.data;
        recibos = docs;
        this.setState({
            recibos: [... this.state.recibos, ...recibos],
            reciboInfo,
            page
        });

    }

    loadMore = () => {
        const { page, reciboInfo } = this.state;

        if (page === reciboInfo.pages) return;

        const pageNumber = page + 1;

        this.loadRecibos(pageNumber);
    }

    DeleteRecordsToServer(id) {
        Alert.alert(
            'Exclusão de Evento',
            'Você confirma a exclusão deste Evento?',
            [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: () => {
                        fetch(`https://appadriantolfo.herokuapp.com/App/recibos/${id}`, {
                            method: "delete"
                        }).then(data => {
                            if (data.ok) {
                                this.props.navigation.navigate('Main');
                            }
                        })
                    }
                }
            ])
    }

    renderItem = ({ item }) => (
        <View style={styles.reciboContainer}>
            <Text style={styles.reciboName}>{item.name}</Text>
            <Text style={styles.reciboDate}>{item.date}</Text>
            <Text style={styles.reciboDescription}>{item.description}</Text>
          

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.push('Details', { recibo: item })
                }}>
                <Text style={styles.buttonText}>Detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.push('Update', { recibo: item })
                }}>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => this.DeleteRecordsToServer(item._id)}  >
                <Text style={styles.buttonText}> Excluir </Text>
            </TouchableOpacity>

        </View>
    );

    render() {
        return (
            <View style={styles.backgroundImage}>

            <ImageBackground source={require('../img/background/blackyellowbg.jpeg')}>
                  {this.props.children}
             </ImageBackground>       
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.push('Insert')
                        }}>
                        <Text style={styles.buttonText}>Registre seu Evento</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.recibos}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
         </View>
        );
    }
}