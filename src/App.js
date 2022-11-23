import './App.css';
import {Component} from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'read',
            selectedContentId: 1,
            welcome: {
                title: 'Welcome',
                desc: 'Hello, React!!',
            },
            subject: {
                title: '제목이란다.',
                subject: '주제란다.',
            },
            contents: [
                { id:1, title: 'HTML', desc: 'HTML이란다.' },
                { id:2, title: 'CSS', desc: 'CSS란다.' },
                { id:3, title: 'JavaSccript', desc: 'JavaSccript란다.' },
            ],
        }
    }
  render() {
    let title, desc;
    switch (this.state.mode) {
        case 'welcome':
            title = this.state.welcome.title;
            desc = this.state.welcome.desc;
            break;
        case 'read':
            for (const content of this.state.contents) {
                if (content.id !== this.state.selectedContentId) {
                    continue;
                }

                title = content.title;
                desc = content.desc;
                break;
            }
            break;
    }

    return (
        <div className="App">
            <Subject
                title={this.state.subject.title}
                subject={this.state.subject.subject}
                onChangePage={function () {
                    this.setState({ mode: 'welcome' });
                }.bind(this)}
            ></Subject>
            <TOC
                contents={this.state.contents}
                onChangePage={function (id) {
                    this.setState({
                        mode: 'read',
                        selectedContentId: id,
                    });
                }.bind(this)}
            ></TOC>
            <Content title={title} desc={desc}></Content>
        </div>
    );
  }
}

export default App;
