
interface PlaceProps {
    image: string;
    imageAlt: string;
    placeTitle: string;
    location: string;
    map: string;
    description: string;
}

function Place(props: PlaceProps): JSX.Element {
    return (
       <>
        <img src={props.image} alt={props.imageAlt}/>
        <h2>{props.placeTitle}</h2>
        <h3>{props.location} : View on map <a href={props.map}>here.</a></h3>
        <p>{props.description}</p>
       </> 
    )
}

export default Place;
