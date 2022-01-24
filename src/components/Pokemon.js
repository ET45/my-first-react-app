const Pokemon = (probs) => {
  return (
    <div>
      <h2>Pokemon name: {probs.name}</h2>
      <p>
        picture:
        <img src={probs.picture} width={100} />
      </p>
      <p>Weight: {probs.weight} kg</p>
      <p>Awesome: {probs.awesome ? "YES!" : "nope not Awesome"}</p>
      <p>Terrifying: {probs.terrifying ? "Yep" : "Its alright"}</p>
      <p>Abilities({probs.abilities.length}) </p>
      <ul>
        {probs.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
