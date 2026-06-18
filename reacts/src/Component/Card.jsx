import './Card.css'

function Card(props) {

  return (
    <div className={props.className}>

      <img
        src={props.img}
        alt="profile"
        width="50px"
      />

      <h2>{props.name}</h2>
      <h2>{props.className}</h2>

    </div>
  )
}

export default Card