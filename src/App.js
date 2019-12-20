import React, {Component} from "react";

class Hello extends React.Component {
    render() {
        const styles = {color: this.props.color};
        return <h1>{this.props.icone}<a href={this.props.link} style={styles}> {this.props.title}</a></h1>

    }
}

class Link extends React.Component {
    render() {
        let className = "link";
        return (
            <div className={className}>
                <h4>Mes Resaux Sociaux </h4>
                <Hello title="Google" link="https://www.google.fr/ " color="#EA4335" icone="Ⓜ"/>
                <Hello title="Twitter" link="https://www.twitter.com " color="#1DA1F2" icone="👬"/>
                <Hello title="Instagram" link="https://www.instagram.com/?hl=fr" color="#AA3888" icone="☝"/>
            </div>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, trop: ''};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment() {
        this.state.count <= 9 && this.setState({count: this.state.count + 1});
        this.state.count >= 2 && this.setState({trop: "✅"});

    }

    decrement() {
        this.state.count > 0 && this.setState({count: this.state.count - 1});
        this.state.count <= 3 && this.setState({trop: "😴 "});

    }

    render() {
        let className = "count";
        return (
            <div className={className}>
                <h1>Vous avez {this.state.count} point. {this.state.trop}</h1>
                <div className='btn'>
                    <button onClick={this.increment}>J'ai un nouveau point</button>
                    <button onClick={this.decrement}>J'ai perdu un point</button>
                </div>

            </div>
        )
    }
}

const ROUTE = {
    home: '#/',
    completeTasks: '#/c-task',
    incompleteTasks: '#/i-task',

};

class TaskApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curruntRoute: ROUTE.incompleteTasks,
            newTaskDesc: "",
            task: [

                {
                    id: 1,
                    desc: "Faire du code",
                    complete: true
                },
                {
                    id: 2,
                    desc: "Go to Pita",
                    complete: false
                },
                {
                    id: 3,
                    desc: "Suivre OM",
                    complete: false
                }

            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this)
    }

    componentDidMount() {
        window.location.hash = ROUTE.home;
        window.onhashchange = (e) => {
            this.setState({curruntRoute: window.location.hash})
        }
    }

    allTasks() {
        return this.state.task;
    }

    completeTasks() {
        return this.state.task.filter(task => task.complete);
    }

    incompleteTasks() {
        return this.state.task.filter(task => !task.complete);
    }

    renderRoute() {
        switch (this.state.curruntRoute) {
            case ROUTE.home:
                return <TaskList tasks={this.allTasks()} title="Toutes les taches"/>;
            case ROUTE.completeTasks:
                return <TaskList tasks={this.completeTasks()} title="Les Taches Completes"/>;
            case ROUTE.incompleteTasks:
                return <TaskList tasks={this.incompleteTasks()} title="Les Taches Incompletes"/>;
            default :
                return <h1>404 Page note found</h1>
        }
    }

    handleChange(e) {
        const {value} = e.target;
        this.setState({newTaskDesc: value});
    }

    addTask(e) {
        e.preventDefault();
        this.setState((prevSate) => {
            const newTask = {
                id: prevSate.task.length + 1,
                desc: prevSate.newTaskDesc,
                complete: false
            };
            return {
                newTaskDesc: "",
                task: [...prevSate.task, newTask]
            }

        });

    }

    render() {
        let classMenu = "menu";
        let classForm = "form";
        return (
            <div className={classMenu}>
                <ul>
                    <li><a href={ROUTE.home}>Home</a></li>
                    <li><a href={ROUTE.completeTasks}>Completes</a></li>
                    <li><a href={ROUTE.incompleteTasks}>Incompletes</a></li>
                </ul>
                <form className={classForm} onSubmit={this.addTask.bind(this)}>
                    <input type="text" onChange={this.handleChange} value={this.state.newTaskDesc}
                           placeholder={"Ajoutez votre tâche"}/>
                    <input className={"val"} type="submit" value="Ajouter"/>
                </form>
                {this.renderRoute()}
            </div>


        )
    }
}

const TaskList = (props) => {
    let className = "Task";

    return (
        <div className={className}>
            <h4>{props.title}</h4>
            {props.tasks.map(task => <Task key={task.id} detail={task}/>)}
        </div>
    );
};

const Task = (props) => (
    <article>
        <h2>
            # {props.detail.id} - {props.detail.desc}
            - {props.detail.complete ? ' ✅ ' : ' ❌ '}
        </h2>
    </article>
);


class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Link/>
                <TaskApp/>
            </div>
        );
    }
}

export default App;