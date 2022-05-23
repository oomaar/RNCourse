import { useState } from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { testStyles } from "./styledTestComponent";

export const TestComponent = () => {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <KeyboardAvoidingView behavior="padding" style={testStyles.componentContainer}>
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
        </KeyboardAvoidingView>
    )
}
