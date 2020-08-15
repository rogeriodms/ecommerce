import React,{useState,useEffect} from 'react';
import {
 View,
 KeyboardAvoidingView,
 Image,
 TextInput,
 TouchableOpacity,
 Text,
 Animated,
 ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Actions} from 'react-native-router-flux';

import style from '../styles';


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
        <ScrollView>
        <View  style={style.ScrollView} >
        <KeyboardAvoidingView style={style.backgroud}>
        
            <Animated.View style={[style.container,
            {
                opacity: opacity,
                transform:[{
                    translateY: offset.y
                }]
            }
            ]}>
                <TextInput style={style.input} placeholder='Nome' autoCorrect={false} onChangeText={()=>{}} autoCompleteType={'name'}/>
                <TextInput style={style.input} placeholder='E-mail' autoCorrect={false} onChangeText={()=>{}} keyboardType={'email-address'} />
                <TextInput style={style.input} placeholder='CPF' autoCorrect={false} onChangeText={()=>{}} keyboardType={'numeric'}  />
                <TextInput style={style.input} placeholder='CEP' autoCorrect={false} onChangeText={()=>{}} keyboardType={'numeric'} autoCompleteType={'postal-code'}/>
                <TextInput style={style.input} placeholder='Rua' autoCorrect={false} onChangeText={()=>{}} />
                <TextInput style={style.input} placeholder='Numero' autoCorrect={false} onChangeText={()=>{}} keyboardType={'numeric'} />
                <TextInput style={style.input} placeholder='Complemento' autoCorrect={false} onChangeText={()=>{}} />
                <TextInput style={style.input} placeholder='Senha' autoCorrect={false} onChangeText={()=>{}} />
                <TextInput style={style.input} placeholder='Confirmar Senha' autoCorrect={false} onChangeText={()=>{}} />

                <TouchableOpacity  style={style.btnsubmit}>
                    <Text style={style.submitxt}>Cadastrar</Text>
                </TouchableOpacity>
            </Animated.View>
        
        </KeyboardAvoidingView>
        </View>
        </ScrollView>
    );
}