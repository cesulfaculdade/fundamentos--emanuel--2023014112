import { Text, TouchableOpacity, View } from "react-native"
import { style } from "./styles"

type Props = {
    name: string
    onRemove: () => void;
} 

export function Product({name, onRemove}: Props) {
    return (
            <View style={style.container}>
              <Text style={style.name}>{name}</Text>

            <TouchableOpacity style={style.button} onPress={onRemove}>
                <Text style={style.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

