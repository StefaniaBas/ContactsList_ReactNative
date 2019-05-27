import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component{
    render(){
        const contact = this.props.navigation.state.params;
        return(
            <View style={{ backgroundColor: colors.background }}>
                <Header {...contact} />
                <Actions {...contact} />
                <Info {...contact} />
            </View>
        )
    }
}

export default Details;