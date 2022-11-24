import {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <div>
                <h2>Create</h2>
                <form>
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="desc"></textarea>
                    </p>
                    <p>
                        <button type="submit"></button>
                    </p>
                </form>
            </div>
        );
    }
}

export default CreateContent;