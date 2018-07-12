import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, ImageBackground, Image, Animated } from 'react-native'
import { Container, Content, Button, Item, Input, Card } from 'native-base'
import{Icon} from 'react-native-elements'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCUHWjeCIrcCeSy3ZjBPWI44UrSuQ6EE7c",
    authDomain: "repertorioreact.firebaseapp.com",
    databaseURL: "https://repertorioreact.firebaseio.com",
    projectId: "repertorioreact",
    storageBucket: "repertorioreact.appspot.com",
    messagingSenderId: "1003378859504"
  };

  firebase.initializeApp(config);

var nomeDaBanda =''  


export default class index extends Component {
    constructor(){
        super()
        this.state = {
            nomeUsuario : ''
        }
    }
    
    acessaMenuPrincipal(){
         nomeDaBanda = this.state.nomeUsuario
        // console.log(nomeDaBanda)
        this.props.navigation.navigate('menuPrincipal',nomeDaBanda)
    }

    render() {

        return (
            <ImageBackground
                source={require('../../imgs/fundo2.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={{ alignSelf: 'center', height: '0%', marginTop: 40 }}>
                    <Image source={require('../../imgs/music-icon.png')} />
                </View>
                <Container style={{ marginTop: 150 }}>
                    <Card style=
                        {
                            {
                                marginLeft: 40,
                                marginBottom:70,
                                width: '80%',
                                backgroundColor: 'rgba(39, 60, 117,0.6)',
                                borderWidth: 4,
                                borderColor: '#2c3e50',
                                borderTopLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                elevation: 5,
                            }
                        }
                    >
                        <View style={{ marginTop: 30 }}>
                            <Item 
                            
                            style={{ marginLeft: 10,borderColor:'transparent', marginRight:10 }}>
                                <Icon name='user' type='font-awesome' iconStyle=
                                    {
                                        {
                                            borderBottomLeftRadius: 10,
                                            padding: 12.8,
                                            color: '#fff',
                                            borderTopLeftRadius: 10,
                                            backgroundColor: 'rgba(0, 168, 255,0.2)'
                                        }
                                    }
                                />
                                <Input
                                    
                                    style={{color:"#fff", borderTopRightRadius:10, borderBottomRightRadius:10, backgroundColor: 'rgba(0, 168, 255,0.2)' }}
                                    placeholder='Digite seu Login'
                                    placeholderTextColor='#fff'
                                    onChangeText = {(nomeUsuario)=> this.setState({nomeUsuario:nomeUsuario})}
                                />
                            </Item>
                            <Item style={{ marginLeft: 10, marginTop:10,borderColor:'transparent', marginRight:10 }}>
                                <Icon name='key' type='font-awesome' iconStyle=
                                    {
                                        {
                                            borderTopLeftRadius:10,
                                            borderBottomLeftRadius: 10,
                                            padding: 12.8,
                                            color: '#fff',
                                            backgroundColor: 'rgba(0, 168, 255,0.2)'
                                        }
                                    }/>
                                <Input
                                  style={{color:"#fff", borderTopRightRadius:10, borderBottomRightRadius:10, backgroundColor: 'rgba(0, 168, 255,0.2)' }}
                                    placeholder='Digite sua senha'
                                    secureTextEntry={true}
                                    placeholderTextColor='#fff'
                                />
                            </Item>
                        </View>
                        <View style={{ margin: 25 }}>
                            <Button full style=
                                {
                                    {
                                        borderRadius: 40,
                                        backgroundColor: 'rgba(0, 151, 230,0.5)',
                                        elevation: 10,
                                        borderColor: '#fff',
                                        borderWidth: 0.5
                                    }
                                }
                                onPress={()=> this.acessaMenuPrincipal()}
                            >
                                <Text style={{color:'#fff', fontWeight:'bold', fontSize:18}}>Acessar</Text>
                            </Button>
                            <Button full style=
                                {
                                    {
                                        backgroundColor: 'rgba(95, 39, 205,0.5)',
                                        borderRadius: 40,
                                        elevation: 10,
                                        borderColor: '#fff',
                                        borderWidth: 0.5,
                                        marginTop: 10
                                    }
                                }
                                onPress={()=> this.props.navigation.navigate('cadastrarUsuario')}
                            >
                                <Text style={{color:'#fff', fontWeight:'bold', fontSize:18}}>Cadastrar</Text>
                            </Button>
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: 8 }}>
                            <Text style={{ color: '#fff', fontSize: 10 }}> Desenvolvido por Marcelo Abrão da Silva </Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 10 }}> 2018 </Text>
                        </View>
                    </Card>

                </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({})

// export {nomeDaBanda}
