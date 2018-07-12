import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';

const questions = ['Favorite Food?','Favorite Game?', 'If you could die, where would you do it?'];


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.newQ = this.newQ.bind(this);
        this.state = {
            question: ''
        };
    }
    newQ(){
        let current = Math.floor(Math.random() * 3);
        this.setState({question: questions[current]});
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AskMe</Text>
        {this.state.question == '' ? <View /> : <Card title="Question:" style={styles.q}><Text style={{fontSize: 30}}>{this.state.question}</Text></Card>}
        <Button style={styles.newQ} title="New Question" backgroundColor="#4286f4" onPress={this.newQ}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 50,
      color: 'white'
  },
  newQ: {
      borderRadius: 50,
      overflow: 'hidden',
      marginTop: '5%'
  },
  q: {
      marginTop: '5%',
  },
});
