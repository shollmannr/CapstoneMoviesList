import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            release_date: ''
        }

        this.idHandler = this.idHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.release_dateHandler = this.release_dateHandler.bind(this);

    }//constructor


    idHandler = (event) => {
        this.setState({
            id: event.target.value
        });
    }


    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        });
    }


    release_dateHandler = (event) => {
        this.setState({
            release_date: event.target.value
        });
    }

    saveMovie = (e) => {
        e.preventDefault();
        let movie = {
            id: this.state.id,
            title: this.state.title,
            release_date: this.state.release_date
        };
        console.log(movie);
        MovieService.createMovie(movie).then(res => {
            this.props.history.push('/movies');
        }).catch(err => {
            console.log("record not saved.");
        });




    }//closing save method

    cancel() {
        this.props.history.push('/movies');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Movie</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Movie ID: </label>
                                        <input placeholder="Id" name="id" className="form-control"
                                            value={this.state.id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.titleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie release_date: </label>
                                        <input placeholder="" name="release_date" className="form-control"
                                            value={this.state.release_date} onChange={this.release_dateHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveMovie}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddMovie;