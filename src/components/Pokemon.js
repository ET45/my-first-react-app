const Pokemon = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <p>
          picture:
          <img src={props.picture} width={100} />
        </p>
        <h6 className="card-subtitle">Weight: {props.weight} kg</h6>
        <h6 className="card-subtitle">
          Awesome: {props.awesome ? "YES!" : "nope not Awesome"}
        </h6>
        <h6 className="card-subtitle">
          Terrifying: {props.terrifying ? "Yep" : "Its alright"}
        </h6>
        <p>Abilities({props.abilities.length}) </p>
        <ul>
          {props.abilities.map((ability, index) => {
            return <li key={index}>{ability}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
