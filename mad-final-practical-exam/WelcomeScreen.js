import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen(){
  return(
    <View style={styles.container}>
      <View style={styles.content}>

        <View>
          <Image 
            source={require('../assets/welcome.png')} 
            style={styles.image}
          />
        </View>
        
        <View>
          <Text style={styles.title}>Let's get</Text>
          <Text style={styles.title}>you started</Text>
        </View>

        <View style={styles.subGroup}>
          <Text style={styles.subTitle}>Create an account or log in to pick up right</Text>
          <Text  style={styles.subTitle}>where you left off.</Text>
        </View>

        <View>
          <View>
            <TouchableOpacity style={styles.creatActBut}>
              <Text style={styles.createText}>Create account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerGroup}>

          <Text style={styles.footerText}>By continuing you agree to our</Text>

            <TouchableOpacity>
              <Text style={styles.footColor}> Terms </Text>
            </TouchableOpacity>

              <Text style={styles.footerText}>and</Text>

            <TouchableOpacity>
              <Text style={styles.footColor}> Privacy Policy.</Text>
            </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  content:{
    justifyContent: 'cewnter',
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
 
  },
  subGroup:{
    marginTop: 15,
    marginBottom: 35,
  },
  loginButton:{
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEAFF',
    borderRadius: 15,
    marginTop: 10,
  },
  creatActBut:{
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5B4BFF',
    borderRadius: 15,
    marginTop: 10,
  },
  createText:{
    color: '#F4F3FB',
    fontSize: 19,
    fontWeight: 700,
  },
  loginText:{
    color:'#1C1A3A',
    fontWeight: 700,
    fontSize: 18,
  },
  footerGroup:{
    flexDirection: 'row',
  },
  footerText:{
    fontSize: 15,
    marginTop: 15
  },
  footColor:{
    color: '#5B4BFF',
    marginTop: 15,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 700
  }
})