import './App.css';
import {Component} from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Control from "./components/Control";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'create',
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
    let title, desc, Content;
    switch (this.state.mode) {
        case 'welcome':
            title = this.state.welcome.title;
            desc = this.state.welcome.desc;
            Content = <ReadContent title={title} desc={desc}></ReadContent>;
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

            Content = <ReadContent title={title} desc={desc}></ReadContent>;
            break;
        case 'create':
            Content= <CreateContent></CreateContent>
            break;
        case 'update':
            break;
        case 'delete':
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
            <Control
                onChangeMode={function (mode) {
                    this.setState({mode});
                }.bind(this)}
            ></Control>
            {Content}
        </div>
    );
  }
}

export default App;
