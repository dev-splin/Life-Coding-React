import {Component} from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h2>
                    <a href="/">{this.props.title}</a>
                </h2>
                {this.props.subject}
            </header>
        );
    }
}

export default Subject;