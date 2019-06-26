import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/services';
import styles from '../styles/style';

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recibo: {
                name: "",
                value: "",
                description: ""
            }
        }
    };

    async componentDidMount() {
        const { navigation } = this.props;

        const response = await api.get(`/recibos/${navigation.state.params.recibo._id}`);

        this.setState({ recibo: response.data });
    }

    UpdateRecordsToServer = () => {
        const { navigation } = this.props;
        fetch(`https://appadriantolfo.herokuapp.com/App/recibos/${navigation.state.params.recibo._id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: this.state.recibo.name,

                date: this.state.recibo.date,

                endereco: this.state.recibo.endereco,

                email: this.state.recibo.email,

                phone: this.state.recibo.phone,

                description: this.state.recibo.description
                

            })

        }).then(data => {
            if (data.ok) {
                this.props.navigation.push('Main')
            }
        })
    }

    render() {
       
        return (            
            <View style={styles.container}>
                <View>
                    <View>
                        <Text  style={styles.textcolorwhite}>Nome</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Nome do Evento'
                            value={this.state.recibo.name}
                            onChangeText={(text) =>
                                this.setState({ recibo: { ...this.state.recibo, name: text } }
                                )}
                        />
                    </View>

                    <View>
                        <Text  style={styles.textcolorwhite}>Endereco</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Endereço do Evento'
                            value={this.state.recibo.value.toString()}
                            onChangeText={(text) =>
                                this.setState({ recibo: { ...this.state.recibo, endereco: text } }
                                )}
                        />
                    </View>
                    <View>
                        <Text  style={styles.textcolorwhite}>Email</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Email para contato'
                            value={this.state.recibo.value.toString()}
                            onChangeText={(text) =>
                                this.setState({ recibo: { ...this.state.recibo, email: text } }
                                )}
                        />
                    </View>
                    <View>
                        <Text  style={styles.textcolorwhite}>Telefone</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Telefone para contato'
                            value={this.state.recibo.value.toString()}
                            onChangeText={(text) =>
                                this.setState({ recibo: { ...this.state.recibo, phone: text } }
                                )}
                        />
                    </View>

                    <View>
                        <Text  style={styles.textcolorwhite}>Description</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Insert name'
                            value={this.state.recibo.description}
                            onChangeText={(text) =>
                                this.setState({ recibo: { ...this.state.recibo, description: text } }
                                )}
                        />
                    </View>

                </View>

                <View>
                    <TouchableOpacity
                         style={styles.button}
                         onPress={this.UpdateRecordsToServer}
                         onPress={() => this.props.navigation.navigate('Main')} >
                        <Text style={styles.buttonText}> Atualizar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>



                </View>

            </View>
        )
    }
}