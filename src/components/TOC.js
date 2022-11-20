import {Component} from "react";

class TOC extends Component {
    render() {
        const list = [];
        const contents = this.props.contents;
        for (const content of contents) {
            list.push(
                <li key={content.id}>
                    <a href={`/content/${content.id}`}>
                        {content.title}
                    </a>
                </li>);
        }

        return (
            <nav>
                <ul>
                    { list }
                </ul>
            </nav>
        );
    }
}

export default TOC;