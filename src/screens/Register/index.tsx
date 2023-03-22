import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


//Função convencional
function clique(){
    console.log("Cliquei")
}

//Arrow Function () =>
const cliqueAqui = () => {
    console.log("Cliquei Aqui")
}

function Register({ navigation }) {
    return (
        // View - Se comporta como uma DIV no HTML.
        // Text - Se comporta como o elemento P.
        // Button - Se comporta como o elemento BUTTON.
        
        <View style={css.qualquerCoisa}>
           <Text style={css.texto}>Qualquer coisa</Text>
           <Button
            title='Clique aqui'
            onPress={cliqueAqui}
            accessibilityLabel="Botão clique aqui!"
           />
        </View>

    )
}
export default Register;

//Toda propriedade de CSS utiliza camelCase Ramon Bicalho, ramon-bicalho(pascal-case), ramonBicalho(camelCase)

const css = StyleSheet.create({
    //declaração do nome da classe
    qualquerCoisa: {
        backgroundColor: '#000444',
        flex: 1,
        justifyContent: 'center'
    },
    texto: {
        fontSize: 24,
        color: '#FFF'
    }
})