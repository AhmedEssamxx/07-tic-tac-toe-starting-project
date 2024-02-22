import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditing = () => {
    setIsEditing((editing) => !editing);
    isEditing && onChangeName(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing && (
          <input
            onChange={handleChange}
            type="text"
            className="player-name"
            value={playerName}
            required
          />
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
