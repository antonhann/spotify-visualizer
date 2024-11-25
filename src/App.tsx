import './App.css'
import DataVisualizer from './components/DataVisualizer'
import Layout from './components/reusables/Layout'

function App() {

  return (
    <Layout>
      <div>
        <h1>Spotify Visualization</h1>
        <p>Created by: Anton Ha</p>
      </div>
      <DataVisualizer/>
    </Layout>
  )
}

export default App
