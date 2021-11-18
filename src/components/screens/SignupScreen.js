import React from 'react';
import { Text, View, TextInput, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons, Entypo, Ionicons,  } from '@expo/vector-icons';
const {width, height} = Dimensions.get("screen");

export default function signup({navigation}){
   
    return(
        <SafeAreaView style={{ marginTop: 25, width, height, backgroundColor: "white", paddingHorizontal: 20}}> 
			<View style={{marginTop: 20}}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back-circle-outline" size={40} color="#FFD700" onPress={() => navigation.goBack()}  />
                </TouchableOpacity>
            </View>
            
            {/* Create account */}
            <View style={{marginTop: 50}}>
				<Text style={{fontSize: 27, fontWeight: "bold", color: "black"}}>Create Account</Text>
			</View>


            {/* Name */}
            <View style={{flexDirection: "row", marginTop: 20}}>
                <FontAwesome5 name="user" size={24} color="black" style={{position: "absolute"}} />
                <TextInput 
                    style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
                    placeholder="Your Name" 
                    autoCapitalize="none"
                />
			</View>  

            {/* Email */}
			<View style={{marginTop: 20,}}>
				<View style={{flexDirection: "row", marginTop: 20}}>
                <Ionicons name="mail-outline" size={24} color="black" style={{position: "absolute"}}/>
					<TextInput 
						style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
						placeholder="Your Email" 
						autoCapitalize="none"
					/>
				</View>   
			</View>

            {/* Password */}
			<View style={{marginTop: 20,}}>
				<View style={{flexDirection: "row", marginTop: 20}}> 
					<Feather name="lock" size={24} color="black" style={{position: "absolute"}}/>
				<TextInput 
					style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
                	secureTextEntry={true} 
                	placeholder="Password" 
                	autoCapitalize="none"
                />
				</View>
			</View>

            {/* Confirm password */}
            <View style={{marginTop: 20,}}>
				<View style={{flexDirection: "row", marginTop: 20}}> 
					<Feather name="lock" size={24} color="black" style={{position: "absolute"}}/>
				<TextInput 
					style={{paddingLeft: 30, borderBottomWidth: 0.5, flex: 1, fontSize: 18,}}
                	secureTextEntry={true} 
                     
                	placeholder="Confirm Password" 
                	autoCapitalize="none"
                />
				</View>
			</View>
			

			{/* Sign up */}
            <View style={{alignItems: "flex-end"}}>
                <TouchableOpacity onPress={() =>navigation.navigate('homepage')} >
                    <View style={styles.signup_style}>
                        <Text style={{color: "#FFD700", fontWeight: "bold", marginLeft: 5}}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            


			<View style={{marginVertical: 10, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
					<Text style={{fontWeight: "bold", marginHorizontal: 5}}>OR</Text>
			</View>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity>
                    <View style={styles.primary}>
                        <Ionicons name="logo-facebook" size={24} color="#005BD8" />
                        <Text style={{fontWeight: "bold", marginLeft: 10}}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.primary}>
                        <MaterialCommunityIcons name="google" size={24} color="#FA0812"/>
                        <Text style={{fontWeight: "bold", marginLeft: 10}}>Continue with Google</Text>
                    </View> 
                </TouchableOpacity>
				
			</View>
			

        </SafeAreaView>
        
    )
}

const styles= StyleSheet.create({
	signup_style: {
		justifyContent: 'center',
		alignItems: "center",
		marginTop: 10, 
		padding: 10, 
		marginTop: 10,
		borderRadius: 20,
		paddingHorizontal: 25, 
        borderColor: "#FFD700",
        borderWidth: 1, 
		backgroundColor: "white", 
	},
	primary: {
		width: 250,
		flexDirection: 'row',
		paddingHorizontal: 20,
		padding: 25,
		marginTop: 10,
		borderWidth: 1,
		borderColor: "#FFD700",
		borderRadius: 20

	},
	
});