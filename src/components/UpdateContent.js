import {Component} from "react";

class UpdateContent extends Component {
    render() {
        return (
            <div>
                <h2>Create</h2>
                <form
                    action="/update_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(

                        )
                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="desc"></textarea>
                    </p>
                    <p>
                        <button type="submit">만들기</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default UpdateContent;