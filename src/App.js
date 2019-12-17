import React, { Component } from "react";

class Hello extends React.Component {
    render() {
        const styles = { color: this.props.color };
        return <h1>{this.props.icone}<a href={this.props.link} style={styles}> {this.props.title}</a></h1>

    }
}

class Link extends React.Component {
    render() {
        let className = "link";
        return (
            <div className={className}>
                <h4>Mes Resaux Sociaux </h4>
                <Hello title="Google" link="https://www.google.fr/ " color="#EA4335" icone="Ⓜ" />
                <Hello title="Twitter" link="https://www.twitter.com " color="#1DA1F2" icone="👬" />
                <Hello title="Instagram" link="https://www.instagram.com/?hl=fr" color="#AA3888" icone="☝" />
            </div>
        );
    }
}


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, trop: '' };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment() {
        this.state.count <= 9 && this.setState({ count: this.state.count + 1 })
        this.state.count >= 2 && this.setState({ trop: "✅" });

    }

    decrement() {
        this.state.count > 0 && this.setState({ count: this.state.count - 1 });
        this.state.count <= 3 && this.setState({ trop: "😴 " });

    }

    render() {
        let className = "count";
        return (
            <div className={className}>
                <h1>Vous avez {this.state.count} point. {this.state.trop}</h1>
                <div class='btn'>
                    <button onClick={this.increment}>J'ai un nouveau point</button>
                    <button onClick={this.decrement}>J'ai perdu un point</button>
                </div>

            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <Link />
            </div>
        );
    }
}

export default App;