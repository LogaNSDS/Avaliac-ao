import {View} from 'react-native';
import Titulo from './SRC/Components/Titulo';
import Nicole from './SRC/Components/Nicole';
import Murilo from './SRC/Components/Murilo';
import Vitoria from './SRC/Components/Vitoria';
import Enviar from './SRC/Components/Enviar';
import styles from './Styles';


export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Nicole/>
      <Murilo/>
      <Vitoria/>
      <Enviar/>
      

    </View>
  );
}