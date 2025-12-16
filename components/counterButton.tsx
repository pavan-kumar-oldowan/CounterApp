import {Button} from "react-native";
export default function CounterButton({title,onPress,disabled}:any){
    return(
        <Button 
           title={title}
           onPress={onPress}
           disabled={disabled}
         />
    )
};











