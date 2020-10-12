import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0? "summer" : "winter";
    } else {
        return lat > 0? "winter" : "summer";
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
    const iconName = season === "winter" ? "snowflake" : "sun";

    return (
        <div>
            <h1> {season} </h1>
            <h3> {text} </h3>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;