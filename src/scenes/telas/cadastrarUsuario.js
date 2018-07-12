import React, { Component } from 'react'
import {
    Text, StyleSheet, View, StatusBar, ImageBackground, TouchableOpacity,ScrollView,Alert
} from 'react-native'
import { Header, Container, Content, Item, Button, Left, Body, Input } from 'native-base'
import { Card, Icon } from 'react-native-elements'
import * as firebase from 'firebase'

export default class cadastrarUsuario extends Component {

    constructor(props){
        super(props)
        this.state ={
            nomeBanda:null,
            senhaBanda:null,
            id:null
        }
    }

    adicionarBanda(){
        if(this.state.nomeBanda == null || this.state.nomeBanda == ''){
            Alert.alert('Aviso!','Digite o nome da Banda')
        }else{
            if(this.state.senhaBanda == null || this.state.senhaBanda == ''){
                Alert.alert('Aviso!', 'Digite a senha')
            }else{
                var key = firebase.database().ref('/'+this.state.nomeBanda).push().key
                firebase.database().ref('/'+this.state.nomeBanda)
                .set(
                    {
                        idBanda:key,
                        banda:this.state.nomeBanda, 
                        senha:this.state.senhaBanda
                    }
                )                

                var nomeDaBanda = this.state.nomeBanda
                this.props.navigation.navigate('menuPrincipal',nomeDaBanda)
            }
        }
    }


    render() {
        return (
            <Container>
                <Header
                    style=
                    {
                        {
                            backgroundColor: '#2C3A47',
                            marginTop: StatusBar.currentHeight,
                            borderBottomWidth:2,
                            borderBottomColor: '#fff',
                        }
                    }
                >
                    <Left>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('telaLogin')}
                        >
                            <Icon name='arrow-left' type='font-awesome' color='#fff' />
                        </TouchableOpacity>
                    </Left>
                    <Body
                    >
                        <Text
                            style=
                            {
                                {
                                    alignSelf: 'center',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    fontSize: 20
                                }
                            }
                        > Cadastrar Usuário </Text>
                    </Body>
                </Header>
                <Container>
                    <ImageBackground
                        style={{ width: "100%", height: '100%' }}
                        source={require('../../imgs/fundo2.jpg')}
                    >
                    <ScrollView>
                        <Content>
                            <View>
                                <Card
                                    containerStyle={
                                        {
                                            borderRadius: 10,
                                            backgroundColor: 'rgba(39, 60, 117,0.6)'
                                        }
                                    }
                                    titleStyle={{ color: '#fff' }}
                                    title="Digite seus dados"
                                >
                                    <View>
                                        <Item
                                            style={{ marginLeft: 10, borderColor: 'transparent', marginRight: 10 }}>
                                            <Icon name='music' type='font-awesome' iconStyle=
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
                                                // ref={input => this.nomeInput = input}
                                                style={{ 
                                                    borderTopRightRadius: 10, 
                                                    borderBottomRightRadius: 10, 
                                                    backgroundColor: 'rgba(0, 168, 255,0.2)',
                                                color:"#fff" }}
                                                placeholder='Digite um nome para a Banda'
                                                placeholderTextColor='#fff'
                                                onChangeText ={(nomeBanda)=> this.setState({nomeBanda:nomeBanda})}
                                                autoFocus = {true}
                                                // onSubmitEditing={() => this.senhaInput.focus()}
                                            />
                                        </Item>
                                        <Item style={{ marginLeft: 10, marginTop: 10, borderColor: 'transparent', marginRight: 10 }}>
                                            <Icon name='key' type='font-awesome' iconStyle=
                                                {
                                                    {
                                                        borderTopLeftRadius: 10,
                                                        borderBottomLeftRadius: 10,
                                                        padding: 12.8,
                                                        color: '#fff',
                                                        backgroundColor: 'rgba(0, 168, 255,0.2)'
                                                    }
                                                } />
                                            <Input
                                                // ref = {input => this.senhaInput = input}
                                                style={{color:"#fff", borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'rgba(0, 168, 255,0.2)' }}
                                                placeholder='Digite sua senha'
                                                secureTextEntry={true}
                                                placeholderTextColor='#fff'
                                                onChangeText={(senhaBanda)=> this.setState({senhaBanda:senhaBanda})}
                                            />
                                        </Item>
                                    </View>
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
                                        onPress={() => this.adicionarBanda()}
                                    >
                                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Cadastrar</Text>
                                    </Button>
                                </Card>
                                <View style={{ marginTop: 20 }}>
                                    <Card
                                        title='Instruções de Uso'
                                    >
                                        <Text
                                        >
                                            1 - A senha cadastrada, deverá ser compartilhada com os demais membros da banda para que todos tenham acesso ao Repertório.
                                    </Text>
                                    
                                    <Text style={{marginTop:10}}>
                                            2 - Todos os usuários portadores da senha poderam editar, adicionar ou remover as músicas do repertório
                                    </Text>
                                    </Card>
                                </View>
                            </View>
                        </Content>
                        </ScrollView>
                    </ImageBackground>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
