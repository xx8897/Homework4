import React from 'react';
import $ from 'jquery';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: '',
            username: '',
            userid: '',
            userlogin: '',
            userlocation: '',
            githubtUrl: '',
        }
    }

    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    avatarUrl: data.avatar_url,
                    username: data.name,
                    userid: data.id,
                    userlogin: data.login,
                    userlocation: data.location,
                    githubtUrl: data.html_url,
                });
            }
        });
    }

    render() {
        return (
            <div>
                <img src={this.state.avatarUrl} alt = {""}/>
                <h1>{this.state.username}</h1>
                <h2>{this.state.userid}</h2>
                <h3>{this.state.userlogin}</h3>
                <h4>{this.state.userlocation}</h4>
                <a href={this.state.githubtUrl}>Github Link</a>.
            </div>
        );
    }
}

export default Github;