import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import {connect} from 'react-redux'
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../../store/actions'

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                username: '',
                password: '',
            }

        };

        this.login = this.login.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        const loginData = {
            username: nextProps.email,
            password: nextProps.password,
            client_id: 2,
            client_secret: 'Fl47ARja6wTwxWMoE3fUnPVexhxbvFl6LvStYCUn',
            grant_type: 'password'
        };
        this.setState({loginData: loginData});
    }


    login() {
        this.props.loginUser(this.state.loginData)
            .then(success => {
                if (success) {
                    this.props.navigation.navigate('Home')
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={this.props.emailChanged}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={this.props.passwordChanged}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={this.login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <View style={styles.loginFooter}>
                    <Text>You don't have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#FF4DFF",
    },
    loginText: {
        color: 'white',
    },
    loginFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 18
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
};

const mapActionCreators = {
    emailChanged,
    passwordChanged,
    loginUser
};

export default connect(mapStateToProps, mapActionCreators)(LoginScreen);

