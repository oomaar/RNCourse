import { useState } from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import { testStyles } from "./styledTestComponent";

export const TestComponent = () => {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <KeyboardAvoidingView behavior="padding" style={testStyles.componentContainer}>
            <View>
                <View style={testStyles.imageContainer}>
                    <Image
                        source={require('../../assets/7a252de00b20.png')}
                        style={testStyles.instagramLogo}
                    />
                </View>
                <View style={testStyles.inputContainer}>
                    <TextInput
                        style={testStyles.input}
                        value={text}
                        onChangeText={onChangeText}
                        placeholder="Phone number, username or email"
                    />
                </View>
                <View style={testStyles.inputContainer}>
                    <TextInput
                        style={testStyles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={onChangePassword}
                    />
                </View>
                <View style={testStyles.buttonContainer}>
                    <TouchableOpacity style={testStyles.loginButton}>
                        <Text style={testStyles.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={testStyles.formOrTextContainer}>
                <View style={testStyles.formHorizontalLine} />
                <Text style={testStyles.formOrText}>OR</Text>
                <View style={testStyles.formHorizontalLine} />
            </View>
            <View style={testStyles.buttonContainer}>
                <Button title="Log in with Facebook" />
            </View>
        </KeyboardAvoidingView>
    )
}
