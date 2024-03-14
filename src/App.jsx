import Header from "./components/Header";
import Post from "./Post";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Marcelo" content="Texto aqui" />
          <Post author="Vitoria" content="texto 2 aqui" />
          <Post author="Icaro" content="Texto 3 aqui" />
        </main>
      </div>
    </>
  );
}

export default App;
