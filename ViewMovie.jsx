import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class ViewMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movie: {}

        }



    }//constructor

    componentDidMount() {
        MovieService.getMovieById(this.state.id).then((res) => {
            this.setState({ movie: res.data })
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">View Student Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Movie ID: </label>
                                        <input placeholder={this.state.movie.id} readOnly={true} name="id" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Title: </label>
                                        <input placeholder={this.state.movie.title} readOnly={true} name="title" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Release Date: </label>
                                        <input placeholder={this.state.movie.releaseDate} readOnly={true} name="release date" className="form-control" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewMovie;