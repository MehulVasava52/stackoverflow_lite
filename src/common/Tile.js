import "../resources/sass/Tile.scss";
const Tile = ({text, value}) => {
    return (
        <div className = {value ? "tile": "hide"}>
            <span> {value} </span>
            <span> {text} </span>
        </div>
    )
}

export default Tile;