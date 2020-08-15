import React,{useState,useEffect} from 'react';
import {
 View,
 KeyboardAvoidingView,
 Image,
 TextInput,
 TouchableOpacity,
 Text,
 Animated
} from 'react-native';
import style from '../styles';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';





const Login = props =>{

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
                <TextInput value={props.email} style={style.input} placeholder='Email' autoCorrect={false} onChangeText={()=>{}} keyboardType={'email-address'}/>
                <TextInput value={props.senha} style={style.input} placeholder='Senha' autoCorrect={false} onChangeText={()=>{}} />

                <TouchableOpacity  style={style.btnsubmit}>
                    <Text style={style.submitxt}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={style.btnregister} onPress={()=> Actions.Cadastro()}>
                    <Text style={style.registertxt}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </Animated.View>



        </KeyboardAvoidingView>
    );
}

const mapStateToProps = state => ({
     email: state.authreducer.email,
     senha: state.authreducer.senha 
    
    })

export default connect(mapStateToProps)(Login);