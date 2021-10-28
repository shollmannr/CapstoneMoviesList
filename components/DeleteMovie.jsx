import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class DeleteMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            release_date: ''
        }


        this.deleteMovie = this.deleteMovie.bind(this);

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




    deleteMovie = (e) => {
        e.preventDefault();
        let movie = {
            id: this.state.id,
            title: this.state.title,
            release_date: this.state.release_date
        };

        console.log(movie);
        MovieService.deleteMovie(this.state.id).then(res => {

            this.props.history.push('/movies');
        })


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
                            <h3 className="text-center">Delete Movie</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Movie ID: </label>
                                        <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                            value={this.state.id} onChange={this.idHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Title: </label>
                                        <input placeholder="Title" readOnly="true" name="title" className="form-control"
                                            value={this.state.title} onChange={this.titleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Release Date: </label>
                                        <input placeholder="Release Date" readOnly="true" name="release date" className="form-control"
                                            value={this.state.release_date} onChange={this.release_dateHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.deleteMovie}> Delete </button>
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

export default DeleteMovie;