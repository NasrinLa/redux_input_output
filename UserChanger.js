import React , {Component} from 'react'
import { Text, View ,StyleSheet , TextInput , TouchableHighlight} from 'react-native'
import{connect} from 'react-redux'
import{setName , setLastname} from '../service/action'

class Userchanger extends Component{

    constructor (props){
        super(props)
        state ={
            nameText :'',
            lastText : '',

           setTextName(text ){
            nameText = text
           },
           setTexLastName(text ){
            lastText = text
           }
        }
    }
  

    
    onPressButton =() =>
    {
        this.props.setName (nameText)
        this.props.setLastname (lastText)
    }

    render(){
        return(
            <View style ={styles.container}>
           
                <TextInput 
                style={styles.inputStyle}
                onChangeText = {text => {state.setTextName(text)}}
                />
                <TextInput 
                style={styles.inputStyle}
                onChangeText = {text => {state.setTexLastName(text)} }
                />
                <TouchableHighlight onPress={this.onPressButton}
                    style ={{width :50 , height:50}}>
                    <Text>login</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle:{
        width:200,
        height:40,
        borderWidth:1,
        borderColor:'black'
    }

});



export default  connect (null ,{setName , setLastname})(Userchanger);
