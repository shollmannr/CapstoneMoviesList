import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class UpdateMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            release_date: ''
        }

        this.idHandler = this.idHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.release_dateHandler = this.release_dateHandler.bind(this);
        this.updateMovie = this.updateMovie.bind(this);

    }//constructor

    componentDidMount() {
        MovieService.getMovieById(this.state.id).then((res) => {
            let movie = res.data;
            this.setState({
                title: movie.title,
                release_date: movie.release_date
            });
        });

    }

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

    updateMovie = (e) => {
        e.preventDefault();
        let movie = {
            id: this.state.id,
            title: this.state.title,
            release_date: this.state.release_date
        };

        MovieService.updateMovie(movie, this.state.id).then((res) => {
            this.props.history.push('/movies');
        });


    }

    cancel() {
        this.props.history.push('/movies');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Movie</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Movie ID: </label>
                                        <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                            value={this.state.id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Title: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.title} onChange={this.titleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Release Date: </label>
                                        <input placeholder="Release Date" name="release_date" className="form-control"
                                            value={this.state.release_date} onChange={this.release_dateHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateMovie}> Update </button>
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

export default UpdateMovie;