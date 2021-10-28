import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class ListMovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
        this.addMovie = this.addMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.viewMovie = this.viewMovie.bind(this);
    }

    componentDidMount() {
        MovieService.getMovie().then((res) => {
            this.setState({ movies: res.data });
        });
    }

    addMovie() {

        this.props.history.push('/add-movie');
    }

    editMovie(id) {
        this.props.history.push(`/update-movie/${id}`);

    }

    deleteMovie(id) {
        this.props.history.push(`/delete-movie/${id}`);
        // MovieService.deleteMovie(id).then(res => {
        //     this.setState({
        //          movie: this.state.movies.filter(movie => movie.id !== id)
        //     })
        // })

    }

    viewMovie(id) {
        this.props.history.push(`/view-movie/${id}`);

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Movies List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addMovie}> Add Movie</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Release Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map(
                                    movie =>
                                        <tr key={movie.id}>
                                            <td>{movie.id}</td>
                                            <td>{movie.title}</td>
                                            <td>{movie.release_date}</td>
                                            <td>
                                                <button onClick={() => this.editMovie(movie.id)} className="btn btn-primary">Update</button>
                                                <button onClick={() => this.deleteMovie(movie.id)} className="btn btn-danger">Delete</button>
                                                <button onClick={() => this.viewMovie(movie.id)} className="btn btn-primary">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListMovies;