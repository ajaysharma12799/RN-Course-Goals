import { useState } from 'react';
import { StyleSheet, View, FlatList, StatusBar, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);

  const deleteGoal = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar barStyle='light-content' />
    <View style={styles.container}  >
      <GoalInput setGoals={setGoals}  />
      <View>
        <Text style={styles.goalsText}>Your Goals</Text>
        <FlatList 
          data={goals}
          renderItem={(itemData) => <GoalItem itemData={itemData} id={itemData.item.id} deleteGoal={deleteGoal} />}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10
  },
  goalsText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
  }
});

export default App;
