import React from 'react';
import Col from 'react-bootstrap/Col';

export class MovieView extends React.Component {

    componentDidMount() {
        document.addEventListener('keypress', event => {
            console.log(event.key);
        });
    }

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="main-view">
                {selectedMovie
                    ? (
                        <Row className="justify-content-md-center">
                            <Col md={8}>
                                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        </Row>
                    )
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    ))
                }
            </div>
        );
    }
}
