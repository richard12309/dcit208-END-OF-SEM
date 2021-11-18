import React from 'react';
import { Text, View, TextInput, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons, Entypo, Ionicons,  } from '@expo/vector-icons';
const {width, height} = Dimensions.get("screen");

export default function login({navigation}){

   
    return(
        <SafeAreaView style={{ marginTop: 20, width, height, backgroundColor: "white", paddingHorizontal: 20}}> 
			{/* login text */}
            <View style={{marginTop: 80}}>
				<Text style={{fontSize: 27, fontWeight: "bold", color: "black"}}>Login</Text>
			</View>

            {/* Please sign in  */}
			<View style={{marginTop: 10,}}>
				<Text style={{color: "#707070"}}>Please sign in to continue</Text>	
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

			{/* forgot password */}
			<View style={{marginTop: 15}}>
				<TouchableOpacity>
					<Text style={{color: "#FFD700"}}>Forgot Password</Text>
				</TouchableOpacity>
			</View>

			{/* login */}
			<View style={{alignItems: "flex-end"}}>
				<TouchableOpacity onPress={() =>navigation.navigate('homepage')} >
					<View style={styles.signin_style}>
						<Text style={{color: "#FFFFFF", fontWeight: "bold", marginLeft: 5}}>LOGIN</Text>
					</View>
				</TouchableOpacity>
			</View>
            

			<View style={{marginVertical: 10, justifyContent: "center", alignItems: "center"}}>
					<Text style={{fontWeight: "bold", marginHorizontal: 5}}>OR</Text>
			</View>

			{/* facebook and Google */}
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
			
			<View style={styles.secondary}>
				<Text style={{color: "#C4C5C6", marginTop: 10,}}>Don't have an account?</Text>
				<TouchableOpacity onPress={() =>navigation.navigate('signup')}>
					<Text style={{color: "#457cb1", fontWeight: "bold"}}>Click here to Sign Up</Text>
				</TouchableOpacity>
			</View>
        </SafeAreaView>
        
    )
}

const styles= StyleSheet.create({
	signin_style: {
		flexDirection: "row",
		justifyContent: 'center',
		alignItems: "center",
		marginTop: 10, 
		padding: 10, 
		marginTop: 10,
		borderRadius: 20,
		paddingHorizontal: 25, 
		backgroundColor: "#edcc26", 
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
	
	secondary: {
		flexDirection: "row", 
		alignItems: 'flex-end', 
		justifyContent: "center", 
		marginTop: 20, 
		marginBottom: 30}
});