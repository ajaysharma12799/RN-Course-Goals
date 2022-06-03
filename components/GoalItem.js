import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({itemData, deleteGoal, id}) => {
  return (
    <Pressable onPress={() => deleteGoal(id)} >
      <View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#3944F7",
        marginTop: 5,
        padding: 5,
        borderRadius: 5
      },
      goalText: {
        color: "white",
        fontSize: 20
      }
});

export default GoalItem