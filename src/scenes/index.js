import {createStackNavigator} from 'react-navigation'
import index from './telas/index'
import cadastrarUsuario from './telas/cadastrarUsuario'
import menuPrincipal from './telas/menuPrincipal'

const Cenas = createStackNavigator({
    telaLogin : {screen:index},
    cadastrarUsuario:{screen:cadastrarUsuario},
    menuPrincipal:{screen:menuPrincipal}
},
    {headerMode:'none'}
)

export default Cenas