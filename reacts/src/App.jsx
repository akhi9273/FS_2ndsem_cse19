import './App.css'
import Card from './Component/Card'

function App() {
  return (
    <div className="main">
      <Card
        img="https://i.pinimg.com/736x/1c/ee/d1/1ceed173d4e5b1bbe2cf2ffd3216dd44.jpg"
        name="Mohan"
        className="b-tech"
      />

      <Card
        img="https://m.media-amazon.com/images/I/51dMgo8EChL.jpg"
        name="Sohan"
        className="class12"
      />

      <Card
        img="https://wallpapercave.com/wp/wp9180586.jpg"
        name="Rupak"
        className="class9"
      />
    </div>
  )
}

export default App