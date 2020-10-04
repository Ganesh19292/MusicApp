import React, { Component } from 'react';
import axios from 'axios'



class SongsList extends Component {
    constructor() {
        super();

    }
    renderSongs() {
        let response = axios.get("http://localhost:4000/api/v1/songs").then(res => {
            this.setState({ allSongs: res.data })
            console.log(res.data)
        });
        
        for (let i = 0; i < response.length; i++) {
          let  result = <tr><td>{response[i].songTitle}<br />
                {response[i].singers}<br />
                {response[i].album}<br />
                <br /></td><td> {response[i].playtime}</td></tr>

        }

    }
    render() {

        return (
            <div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Songs </th>
                                <th> Play Time </th>
                            </tr>
                        </thead>
                        <tbody>


                           <tr> {this.renderSongs()}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default SongsList