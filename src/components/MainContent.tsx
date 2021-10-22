import Place from "./Place";

function MainContent(): JSX.Element {
    return (
        <main>
            <Place 
            image={"https://media.cntraveler.com/photos/55c8be0bd36458796e4ca38a/master/pass/london-eye-2-cr-getty.jpg"} 
            imageAlt={"London Eye"}
            placeTitle={"London Eye"}
            location={"Riverside Building, County Hall, London SE1 7PB, United Kingdom"}
            map={"https://www.google.com/maps/place/lastminute.com+London+Eye/@51.5032833,-0.1205184,18.06z/data=!3m1!5s0x487604c79a2ef535:0x6b1752373d1ab417!4m5!3m4!1s0x487604b900d26973:0x4291f3172409ea92!8m2!3d51.5032973!4d-0.1195537"}
            description={"I ride the london eye once a week."}
            />
            <Place 
            image={"https://c8.alamy.com/comp/T0B00M/tourists-forming-queue-outside-madame-tussauds-london-united-kingdom-T0B00M.jpg"} 
            imageAlt={"Madame Tussauds"}
            placeTitle={"Madame Tussauds"}
            location={"Marylebone Rd, London NW1 5LR, United Kingdom"}
            map={"https://www.google.com/maps/place/Madame+Tussauds+London/@51.5230174,-0.1543613,15z/data=!4m5!3m4!1s0x0:0x26fdced3c04033a4!8m2!3d51.5229035!4d-0.154551"}
            description={"I finally got a selfie with Stormzy."}
            />
            <Place 
            image={"https://media.gettyimages.com/photos/big-ben-clock-tower-london-uk-picture-id1270217479?s=612x612"} 
            imageAlt={"Big Ben"}
            placeTitle={"Big Ben"}
            location={"London SW1A 0AA, United Kingdom"}
            map={"https://www.google.com/maps/place/Big+Ben/@51.5007292,-0.1246254,15z/data=!4m2!3m1!1s0x0:0xb78f2474b9a45aa9?sa=X&hl=en&ved=2ahUKEwihndqppN7zAhV-RkEAHZ6PDi4Q_BJ6BQjnARAF"}
            description={"Great if you forget your watch."}
            />
        
        </main>
    );
}

export default MainContent;