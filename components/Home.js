import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Home({navigation}){
    return(
        <ScrollView  style={styles.bloco}>
            <Text style={styles.texto}>PREVISÃO DO TEMPO</Text>
            
            <Text style={styles.texto}>Escolha a cidade que deseja ver a previsão do tempo</Text>
            
            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>MONGAGUÁ</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("SP")}>
                    <Text style={styles.textBtn}>SÃO PAULO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>SANTOS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Rj")}>
                    <Text style={styles.textBtn}>RIO DE JANEIRO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Itanhaem")}>
                    <Text style={styles.textBtn}>ITANHAÉM</Text>
                </TouchableOpacity>

            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginTop:30,
        
    },
    texto:{
        fontSize: 30,
        textAlign: 'center',
        color: '#32E6A4'
    },
    textoEnd:{
        fontSize: 20,
        margin: 30,
        textAlign: 'center',
        color: '#32E6A4'
    },
    btn: {
        backgroundColor: '#44FCED',
        marginTop: 20,
        width: '80%',
        height: 30,
        marginLeft: '10%',
        borderRadius: 5
    },
    textBtn: {
        fontSize:20,
        color: '#FFF',
        textAlign: 'center'
    },
    img: {
        width: 400,
        height: 230,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
        alignSelf: 'center'
},
});