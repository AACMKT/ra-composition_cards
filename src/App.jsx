import reactLogo from './assets/react.svg'
import { Card } from './components/Card'
import './App.css'

const data = {
  'firstCard': ['Card title',
     'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    ],
  'secondCard': ['Special title treatment',
     'With supporting text below as a natural lead-in to additional content.'
    ]
}

function App() {
  return (
    <div className = "container">
      <Card title = { data.firstCard[0] } text={ data.firstCard[1] }>
        <img src={ reactLogo } style={ {width: "70%", margin: "auto"} }className="card-img-top" alt="React logo"/>
      </Card>
      <Card title = { data.secondCard[0] } text={ data.secondCard[1] }>
      </Card>
    </div>
  )
}

export default App
