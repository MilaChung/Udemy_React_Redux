import React from "react"
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail
                author = "Camila"
                timeAgo = "Today at 7:00PM"
                comments = "I loved!"
                avatar = {faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);