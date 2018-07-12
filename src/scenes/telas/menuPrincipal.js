import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Item, Footer, FooterTab } from 'native-base'
import { SearchBar, Icon } from 'react-native-elements'
import * as firebase from 'firebase'
var bandas = []
var ref = firebase.database().ref();
var bandaRef = ''
var nomeUsuario = ''
export default class menuPrincipal extends Component {

  constructor() {
    super()
    this.state = {
      login: null
    }
  }

  componentDidMount() {
    const nomeBanda = this.props.navigation.state.params
    bandaRef = ref.child(nomeBanda)
    bandaRef.on('value', (dados) => {
      bandas.push({
        dadosBanco: dados.toJSON()
      })
      bandas.map((i) => {
        this.setState({ login: i.dadosBanco.banda })
      })
    })
  }

  render() {
    return (
      <Container>
        <View style={{ marginTop: StatusBar.currentHeight }}>
          <SearchBar
            round
            placeholder="Digite o nome da Música"
          />
        </View>
        <View
          style=
          {
            {
              width: '100%',
              height: '5%',
              backgroundColor: '#2C3A47',
              borderBottomWidth: 2,
              borderBottomColor: '#fff'
            }
          }
        >
          <View alignSelf='center' style={{ marginTop: 4 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#fff" }}> Bem Vindo {this.state.login} </Text>
          </View>
        </View>
        <View style=
        {
          {
            width:'100%',
            height:'7%',
            backgroundColor:'#130f40',
            borderBottomWidth:2,
            borderBottomColor:'#fff'
          }
        }>
        <TouchableOpacity>
            <View flexDirection='row' alignSelf='center' style={{padding:10}}>
              <Icon name = 'plus-circle'  type='font-awesome' iconStyle={{color:'#fff'}} size={30}/>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#fff" }}> Adicionar Nova Música </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style=
          {
            {
              width: '100%',
              height: '100%',
              backgroundColor: '#34495e',
              borderBottomWidth: 2,
              borderBottomColor: '#fff'
            }
          }
        >
        </View>

      </Container>
    )
  }
}

const styles = StyleSheet.create({})
