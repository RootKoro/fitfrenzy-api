import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { WelcomePage } from './pages/welcome.page';
// import { WelcomeComponent } from './components/welcome';


export default function App() {
  return (
	<View style={styles.container}>
		<WelcomePage />
		{/* <Text style={styles.text}>
			Here is my exemple
		</Text> */}
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
	textAlign: 'center',
	fontSize: 'large',
	fontWeight: 'bold',
  }
});
