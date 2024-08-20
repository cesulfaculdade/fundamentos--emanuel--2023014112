import { useCallback,useEffect, useMemo, useState } from "react";
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Product } from "../components/Product";

export function Home() {
    const [products, setProducts] = useState<string[]>([]);
    const[productName, setProductName] = useState ('');

    function handleProductAdd() {
        if (products.includes(productName)) {
            return Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.");
        }

        setProducts((prevState) => [...prevState, productName]);
        setProductName('');
    }

    function handleProductRemove(name: string) {
        return Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setProducts(prevState => prevState.filter(product => product != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <Text style={styles.todaySate}>Segunda-Feira, 05 de Agosto de 2024</Text>
            <View style={styles.form}> 
                <TextInput 
                style={styles.input}
                placeholder="Nome do Produto"
                placeholderTextColor='#BDBABA'
                keyboardType="default"
                onChangeText={setProductName}
                value={productName}
                />
                
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleProductAdd}>
                    <Text style={styles.textButton}>
                    +
                    </Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.ListTitle}> Compras Pendentes</Text>

                <FlatList 
                 data={products}
                 keyExtractor={item => item}
                 renderItem={({item}) => (
                    <Product name={item} onRemove={()=> handleProductRemove(item)} />
                 )}
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={products.length < 0 && styles.List}
                 ListEmptyComponent={() => (
                    <View style={styles.List}>
                        <Text style={styles.ListEmpyText}> Comprou todos os produtos? Adicione produtos a sua lista de compras </Text>
                    </View>
                 )}

                />            
                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEAEA',
      padding: 24,
      
      
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#fff',
        padding: 16,
        fontSize: 16,
        borderRadius: 5,
        marginRight: 16,
    },

    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31C667', 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    textButton: {
        color: '#fff', 
        fontSize: 24,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 18,
        marginBottom: 36,
    },

    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },

    todaySate: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'normal',
    },

    ListTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    ListEmpyText: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    List: {
        flex: 1,
        justifyContent: 'center',
    }
  });
