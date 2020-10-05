import React, { Component } from 'react';
import axios from 'axios'



class SongsList extends Component {
    constructor() {
        super();

    }
    renderSongs() {
         axios.get("http://localhost:4000/api/v1/songs").then(res => {
            let result = ""
        for (let i = 0; i < res.data.length; i++) {
            result = <tr><td>{res.data[i].songtitle}<br />{res.data[i].singers}<br />{res.data[i].album}<br /><br /></td><td>{res.data[i].playtime}</td></tr>

        }
        console.log(result)
        return result
            // this.setState({ allSongs: res.data })
            
        });
        
        
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
                        {this.renderSongs()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default SongsList