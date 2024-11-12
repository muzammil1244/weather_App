import { useState } from "react";
import { View,Text,Image, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import App from "../App";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const APPUI=({navigation})=>{

    const [getValue , setValue] = useState("buldhana")






    return(
        <View>
            <View style={{

width:"90%",
height:40,
borderWidth:2,
borderColor:'black',
marginTop:30
,alignSelf:'center'
,borderRadius:20,flexDirection:"row",
overflow:'hidden',
justifyContent:'space-between',
backgroundColor:"white"

            }}> 
<TextInput style={{
    backgroundColor:'#FFFFE0',
    width:"80%",
    borderRadius:10
}} onChangeText={(texts)=>setValue(texts)} placeholder="Enter Locatioon" />
    
    
    <TouchableOpacity onPress={()=>{

navigation.navigate("Home",{getValue: getValue })


    }}>
    <Text style={{
        alignSelf:'center',
        marginRight:4,
        backgroundColor:'gray',
        paddingHorizontal:7,
        borderRadius:20,
        paddingVertical:5,
        marginTop:3
    }}>Search</Text>
    </TouchableOpacity>
            </View>






        </View>
    )
}

export default APPUI;



