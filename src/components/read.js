import React from "react";
import { Books } from "./books";
import axios from "axios"; /* can run in the browser and nodejs with the same codebase */

export class Read extends React.Component{

    /* Retrieving the JSON blob */
    componentDidMount() {
        axios.get('https://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books:response.data.myBooks})
        })
    .catch((error)=>{
        /* Default error message */
        console.log(error);
    })

    }



    /* The array to be displayed in read */
    state ={
        books: [
        /* Book returned by JSON blob */
        /*    {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            } */
            ]
           
    }

    /* Displayed HTML */
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                {/*JSON output in HTML*/}
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
