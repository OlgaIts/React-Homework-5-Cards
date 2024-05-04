import {Card} from "./components/Card/Card";
import {Image} from "./components/Image/Image";
import {Title} from "./components/Title/Title";
import {Text} from "./components/Text/Text";
import {Button} from "./components/Button/Button";
import styles from "./App.module.css";
import "./css/global.module.css";

const placeholderImg = "http://via.placeholder.com/300x180";

function App() {
  return (
    <Card>
      <Image src={placeholderImg} alt='image' />
      <div className={styles["card-content"]}>
        <Title title='Card title' />
        <Text text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Button>Go somewhere</Button>
      </div>
    </Card>
  );
}

export default App;
