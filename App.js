import React, {useState} from 'react';
import { Button, Text, View, Image } from 'react-native';

const d20Roller = () =>
 {
    const [rollValue, setRollValue] = useState(0);
        return (
        <View style= {{
                justifyContent: 'center',
                alignItems: 'center',
         }}>
              <Image
                source={{uri: "https://webstockreview.net/images/d20-clipart-dnd-dice.jpg"}}
                style={{width: 150, height: 150}}

              />
              <Text style={{padding: 20, fontSize: 35, color: 'red'}}>D20 Dice Roller</Text>

              <Button
                onPress={() => {
                    setRollValue(getDiceRoll());
                }}
                title="Roll!"
              >
              </Button>

              <Text style={{padding: 20, fontSize: 60, color: 'blue'}}>{rollValue}</Text>
        </View>
        );
}
export default d20Roller;

function getDiceRoll() {
    return Math.floor(Math.random() * 20 - 1 + 1) + 1;
}

