import React,{useState,useEffect} from 'react';
import {
 View,
 KeyboardAvoidingView,
 Image,
 TextInput,
 TouchableOpacity,
 Text,
 StyleSheet,
 Animated,

} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Login(){

    const [offset] = useState(new Animated.ValueXY({ x:0 , y: 120}));
    const [opacity] = useState(new Animated.Value(0));


    useEffect(()=>{
        Animated.parallel([
            Animated.spring(offset.y,{toValue: 0, speed: 4, bounciness: 30}),
            Animated.timing(opacity,{
                toValue: 1,
                duration: 50,
            })
        ]).start();
       
    },[]);


    return(
        <KeyboardAvoidingView style={style.backgroud}>
            
            <View style={style.containerLogo}>
                <Image source={require('../img/logos/logoApp.png')}/>
            </View>
            
            <Animated.View style={[style.container,
            {
                opacity: opacity,
                transform:[{
                    translateY: offset.y
                }]
            }
            ]}>
                <TextInput style={style.input} placeholder='Email' autoCorrect={false} onChangeText={()=>{}} keyboardType={'email-address'}/>
                <TextInput style={style.input} placeholder='Senha' autoCorrect={false} onChangeText={()=>{}} />

                <TouchableOpacity  style={style.btnsubmit}>
                    <Text style={style.submitxt}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={style.btnregister}>
                    <Text style={style.registertxt}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>



        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    backgroud:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFF',
        
    },
    containerLogo:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        width:'90%',
    },
    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#9c00c8',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderColor: '#9c00c8',
        borderWidth: 2,
    },
    btnsubmit:{
        backgroundColor:'#9c00c8',
        width:'90%',
        height: 45,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    submitxt:{
        fontSize: 18,
        color: '#FFF'

    },
    btnregister:{
        marginTop: 10,
    },
    registertxt:{
        color: '#9c00c8',
    },

})