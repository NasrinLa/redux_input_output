import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import{connect} from 'react-redux'


class UserListener extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:16, marginTop : 45}}>{this.props.name}</Text>
                <Text style={{fontSize:16, marginTop : 25}}>{this.props.lastname}</Text>
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
});

const mapStateToProps=(state)=>{
    return{
        name:state.name,
        lastname:state.lastname
    }

}
export default connect(mapStateToProps,{})(UserListener)