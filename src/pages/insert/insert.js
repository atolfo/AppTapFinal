import React, { Component, createRef } from "react";
import DatePicker from 'react-native-datepicker';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../styles/style';


export default class Insert extends Component {

    constructor(props) {
        super(props);
        this.datepicker = createRef();
    }

    static navigationOptions = {
        title: "Off-road"
    };

    state = {
        recibo: {
            name: "",
            date: "",
            endereco: "",
            email: "",
            phone: "",
            description: ""
        }
    };

    InsertRecordsToServer = () => {
        fetch('https://appadriantolfo.herokuapp.com/App/recibos', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: this.state.name,

                date: this.state.date,

                endereco: this.state.endereco,

                email: this.state.email,

                phone: this.state.phone,

                description: this.state.description

            })

        }).then(data => {
            if (data.ok) {
                this.props.navigation.navigate('Main')
            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../img/background/blackyellowbg.jpg')}  style={styles.backgroundImage} >
            <View style={styles.container} onCancel={() => this.props.history.push('/')}>

                <View>
                    <View>
                        <Text style={styles.textcolorwhite}>Nome</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Nome do Evento'
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>
                    <View>
                        <DatePicker
                            ref={this.datepicker}
                            style={styles.reciboContainer}
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            mode="datetime"
                            placeholder="Data do Evento"
                            format="DD-MM-YYYY"
                            minDate="01-01-2018"
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
                        <Text style={styles.textcolorDarkGrey}>Descrição</Text>
                        <TextInput style={styles.reciboContainer}
                            placeholder='Descrição do Evento'
                            onChangeText={description => this.setState({ description })}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity 
                         style={styles.insertButton} 
                         onPress={this.InsertRecordsToServer} 
                         onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.insertButtonText}> Registrar Evento </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.insertButton}
                        onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.insertButtonText}>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </View>
            </ImageBackground>
        )
    }
}