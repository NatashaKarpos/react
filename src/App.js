import Header from './components/header/index';
import Layout from './components/layout/index';
import Footer from './components/footer/index';

import './App.css';

function App() {
  return (
    <div>
      <Header 
        title="title"
        descr="descr"
      />
      <Layout 
        id="1"
        title="title"
        descr="descr"
        urlBg="/static/media/bg1.339e2b02.jpg"
        colorBg=''
      />
      <Layout 
        id="1"
        title="title"
        descr="descr"
        urlBg=''
        colorBg="#555"
      />
      <Layout 
        id="1"
        title="title"
        descr="descr"
        urlBg="/static/media/bg3.59f1c1e9.jpg"
        colorBg=''
      />
      <Footer />
    </div>
  );
}

export default App;
