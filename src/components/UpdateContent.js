import {Component} from "react";

class UpdateContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            desc: this.props.desc,
        }

        this.changeInputValue = this.changeInputValue.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Create</h2>
                <form
                    action="/update_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
                    }.bind(this)}
                >
                    <input
                        type="hidden"
                        name="id"
                        value={this.state.id}
                    ></input>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.changeInputValue}
                        ></input>
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="desc"
                            value={this.state.desc}
                            onChange={this.changeInputValue}
                        ></textarea>
                    </p>
                    <p>
                        <button type="submit">수정</button>
                    </p>
                </form>
            </div>
        );
    }

    changeInputValue(e) {
        this.setState({[e.target.name]: e.target.value});
    }
}

export default UpdateContent;