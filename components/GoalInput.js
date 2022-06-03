import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, ToastAndroid } from 'react-native';

const GoalInput = ({ setGoals }) => {
    const [enteredText, setEnteredText] = useState('');
    
    const handlePress = () => {
        if(enteredText === '') {
            ToastAndroid.show("Please Enter Goal", ToastAndroid.LONG);
        }
        else {
            setGoals(prevGoals => [...prevGoals, {text: enteredText, id: Math.random().toString()}]);
            setEnteredText('');
        }
    }

    return (
        <View>
            <View style={styles.goalImage}>
                <Image source={require('../assets/image/goalsimage.png')} />
            </View>
            <TextInput 
                style={styles.textInput}
                onChangeText={newText => setEnteredText(newText)}
                value={enteredText}
                placeholder="Enter Your Goal" 
            />
            <Button 
                style={styles.addGoal}
                onPress={handlePress}
                title="Add Goals" 
                color="#3944f7"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    goalImage: {
        alignItems: 'center'
    },
    textInput: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#3944f7",
        borderRadius: 5,
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
    },
    addGoal: {
        backgroundColor: "#3944f7",
        borderRadius: 5,
    },
});

export default GoalInput