import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen(){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
      
        <View>
          <Image 
            source={require('../assets/login.png')} 
            style={styles.image}
          />
        </View>
      <View>
        <View >
          <Text style={styles.title}>Welcome back</Text> 
        </View>

        <View>
          <Text style={styles.subTitle}>Log in to your account to continue.</Text> 
        </View>

        <View>

          <Text style={styles.label}>Email address</Text>
            <TextInput
              placeholder= 'john@gmail.com'
              style={styles.inputEmail}
            />
          <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder= '...........'
              secureTextEntry
              style={styles.inputPass}
            />
        </View>

        <View style={styles.forgotCont}>
          <TouchableOpacity >
            <Text style={styles.footColor}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.logText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
            <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialBu}>
            <TouchableOpacity style={styles.social}>
              <Icon name="logo-google" size={40} color="#DB4437" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social}>
              <Icon name="logo-apple" size={40} color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social}>
              <Icon name="logo-facebook" size={40} color="#1877F2" />
            </TouchableOpacity>
        </View>

        <View style={styles.footerGroup}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.footColor}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  content:{
    justifyContent: 'cewnter',
    color: '#ECEAFF',
  },
  image:{
    height: 250,
    width: 350,
    alignItems: 'Center',
    marginBottom: 50
  },
  title:{
    fontSize: 40,
    fontWeight: 800,
  },
  subTitle:{
    fontSize: 18,
    color: '#6B7280',
    marginBottom:'35'
  },
  inputEmail:{
    height: 50,
    backgroundColor: '#ECEAFF',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: '15'
  },
  inputPass:{
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#5B4BFF',
    borderWidth: 2,
  },
  forgotCont:{
    alignSelf: 'flex-end',
  },
  footColor:{
    color: '#5B4BFF',
    fontWeight: 500,
  },
  loginButton:{
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5B4BFF',
    borderRadius: 15,
    marginTop: 10,
  },
  label:{
    fontSize: 16,
    color: '#1C1A3A',
    marginBottom: 6,
  },
  logText:{
    color: '#F4F3FB',
    fontSize: 19,
    fontWeight: 700,
  },
  line: {
    height: 1,
    width: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#6B7280', // Gray text color
  },
  socialBu:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  social:{
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#6B7280',
  },
  footerGroup:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
  },
  footerText:{
    fontSize: 15,
  }
})