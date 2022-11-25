import './App.css';
import {Component} from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent"
import Control from "./components/Control";

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;

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

    getContent() {
        let title, desc, contentData, Content;

        switch (this.state.mode) {
            case 'welcome':
                title = this.state.welcome.title;
                desc = this.state.welcome.desc;
                Content = <ReadContent title={title} desc={desc}></ReadContent>;
                break;
            case 'read':
                contentData = this.getContentData(this.state.selectedContentId);

                Content = <ReadContent title={contentData.title} desc={contentData.desc}></ReadContent>;
                break;
            case 'create':
                ++this.max_content_id;

                Content = <CreateContent
                    onSubmit={function (title, desc) {
                        const contents = this.state.contents.concat({
                            id: this.max_content_id,
                            title,
                            desc
                        });

                        this.setState({ contents });
                    }.bind(this)}
                ></CreateContent>
                break;
            case 'update':
                contentData = this.getContentData(this.state.selectedContentId);

                Content = <UpdateContent
                    id={contentData.id}
                    title={contentData.title}
                    desc={contentData.desc}
                    onSubmit={function (id, title, desc) {
                        const contents = Array.from(this.state.contents);
                        for (let i = 0; i < contents.length; i++) {
                            if(contents[i].id !== id) {
                                continue;
                            }

                            contents[i] = { id, title, desc };
                        }

                        this.setState({ contents, mode: 'read' });
                    }.bind(this)}
                ></UpdateContent>
                break;
            case 'delete':
                break;
        }

        return Content;
    }

    getContentData(findId) {
        for (const content of this.state.contents) {
            if (content.id !== findId) {
                continue;
            }

            return content;
        }

        return [];
    }

    render() {
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
                {this.getContent()}
            </div>
        );
    }
}

export default App;
