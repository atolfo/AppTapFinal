import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import api from '../../services/services';
import styles from '../styles/style';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recibo: {
                name: "",
                date: "",
                endereco: "",
                email: "",
                phone:"",
                description: ""
            }
        }
    };

    async componentDidMount() {
        const { navigation } = this.props;

        const response = await api.get(`/recibos/${navigation.state.params.recibo._id}`);

        this.setState({ recibo: response.data });
    }

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.textcolorwhite}>Nome</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Nome do Evento:'
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>
                    <View>
                        <DatePicker
                            ref={this.datepicker}
                            style={styles.reciboContainer}
                            date={this.state.date}
                            mode="date"
                            placeholder="Data do Evento"
                            format="DD-MM-YYYY"
                            minDate="01-01-2019"
                            maxDate="01-01-2030"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"

                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <View>
                        <Text style={styles.textcolorwhite}>Endereco</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Endereço do Evento'
                            onChangeText={endereco => this.setState({ endereco })}
                        />
                    </View>
                    <View>
                        <Text style={styles.textcolorwhite}>Email</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Email para contato'
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View>
                        <Text style={styles.textcolorwhite}>Telefone</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Telefone para contato'
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </View>
                    <View>
                        <Text style={styles.textcolorwhite}>Description</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Insert description'
                            onChangeText={description => this.setState({ description })}
                        />
                    </View>

                </View>

                <View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>  this.props.navigation.navigate('Main')}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>



                </View>

            </View>
        )
    }
}