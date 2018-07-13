import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

const questions = ["What's your Rice Purity Test score?",
"What's your secret kink?",
"What's your safeword?",
"Would you stay in the same state you were born in?",
"What's your social security number?",
"Scissors or knives?",
"How much money would it take to become a prostitute?",
"Who would you do anything for?",
"What would you be famous for?",
"Pick a senior superlative for the person to your right!",
"How would the person to your left describe you?",
"Cowboys or cyborgs?",
"Are you a good baker?",
"What's your go to pain medicine?",
"Hotdogs, hamburgers, or other?",
"How many stories would you bungee jump from?",
"Would you rather be invincible or immortal?",
"New York or Los Angeles?",
"How much would you spend on a Supreme t-shirt?",
"What should your daddy score on the bdsm test be? What is it actually?",
"Would you be a pilot?",
"What decade aesthetic is your favorite?",
"If god exists, what does it look like?",
"Are you a gamer? Why or why not?",
"Cash or credit?",
"Paper or plastic?",
"Tell me your credit card info...",
"Water with or without ice?",
"Describe your ideal bedroom...",
"What is your Hogwarts house? Why?",
"What astrological sign should you be?",
"Number one rule for your next relationship?",
"Feelings about waterparks?",
"Roller coasters or beach days??",
"Favorite cereal?",
"Peanut butter or nutella?",
"Seagull, pigeon, or crow?",
"Favorite rapper?",
"White van or scary semi truck?",
"What's your favorite outfit?",
"Least favorite kink?",
"What kink does your so have to have?",
"What gives you a thrill?",
"Can you stand bugs?",
"Favorite food trend?",
"Disney or Universal?",
"Do you buy souvenirs on vacation?",
"Who would you die for?",
"Would you ever do meth?",
"Would you kill the President?",
"What's your biggest pet peeve?",
"Are you currently in a relationship? If not, would you be?",
"What dipping sauce are you?",
"Are you lost in the sauce or loose in the juice?",
"If u could broil / grill one fruit, what would it be?",
"What minor holiday would you want to see celebrated like a major one?",
"What major holiday would you get rid of?",
"Best kind of noodle?",
"Ass or titties?",
"Favorite gemstone?",
"Yes or no to zoo ethics? Aquariums?",
"Raindrops, drop tops, or smokin’ on cookie in the hotbox?",
"Best flirting technique?",
"Pick a minor crime: Vandalism or Finesse’n?",
"Club Penguin or Poptropica?",
"Favorite Dinosaur?",
"If the person next across from you died, what tattoo would you get to commemorate them?",
"What’s the worst musical instrument?",
"What are the top three categories of your bdsm test scores?",
"Thoughts on naked cakes?",
"Favorite IKEA food?",
"Chocolate, vanilla or swirl?",
"How many minutes could you hold a plank?",
"Favorite card game?",
"Could you walk into a fancy office building while wearing trashy clothes?",
"What is your heat tolerance?",
"How many Kelvin do you feel right now?",
"Thoughts on hand holding?",
"Place your Starbucks order",
"Deep dish or NYC thin crust pizza?",
"Best food to eat while watching a movie?",
"Would you ever work at a cemetery?",
"Favorite version of Monopoly",
"What is the best color of t-shirt?",
"If you had one wish, what would you do with it?",
"Would you rather see a silent, midnight, or drive-in movie?",
"What would you want for your next meal?",
"What would you want for your last meal?"
];


export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ImageBackground source={require('./bg.png')} style={styles.bgImage}>
                <UI />
            </ImageBackground>
        );
    }
}

class UI extends React.Component {
    constructor(props){
        super(props);
        this.newQ = this.newQ.bind(this);
        this.state = {
            question: '',
            titleDesc: 'on'
        };
    }
    newQ(){
        let current = Math.floor(Math.random() * questions.length);
        this.setState({question: questions[current]});
        this.setState({titleDesc:'off'});
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.titleDesc == 'off' ? <View /> : <Text id="title" style={styles.title}>Instructions</Text>}
                {this.state.titleDesc == 'off' ? <View /> : <Text id="desc" style={{fontSize: 20, color: 'white', textAlign: 'center', marginTop: '5%'}}>Bored on a date? Click the question mark to begin!</Text>}
                {this.state.question == '' ? <View /> : <Card title="Question:" style={styles.q}><Text style={{fontSize: 30}}>{this.state.question}</Text></Card>}
                <Button style={styles.newQ} icon={{name: 'question-circle-o', type: 'font-awesome', style: { marginRight: 0 }}}  raised large title="" backgroundColor="#4286f4" onPress={this.newQ}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 40,
      color: 'white',
      'textDecorationLine': 'underline'
  },
  newQ: {
      marginTop: '5%',
      borderRadius: 25,
      overflow: 'hidden'
  },
  q: {
      marginTop: '5%',
  },
  bgImage: {
      width: '100%',
      height: '100%'
  }
});
