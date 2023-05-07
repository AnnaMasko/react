import './App.module.css';
import styles from './App.module.css'
import { ContentTitle } from './ContentTitle/ContentTitle';
import { Price } from './Price/Price';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div className={styles.container}>
      <Title/>
      <ContentTitle/>
      <Price/>

    </div>
  );
}

export default App;
