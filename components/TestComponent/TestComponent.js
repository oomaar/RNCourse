import { View, Text, Image } from "react-native";

export const TestComponent = () => {
    return (
        <View style={{
            flex: 1,
            width: "100%",
            justifyContent: "center"
        }}>
            <View style={{
                borderWidth: 1,
                borderColor: "red",
                width: "100%",
                height: "100%",
                justifyContent: "center"
            }}>
                <Image
                    source={require('../../assets/7a252de00b20.png')}
                    style={{
                        width: "100%",
                        height: "20%",
                        resizeMode: "contain"
                    }}
                />
            </View>
        </View>
    )
}
