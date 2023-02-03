import { Card, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import { ListGroup, Spinner, Alert } from 'react-bootstrap'
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e647401&s="

class MyMovies extends Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false
    }
    fetchMovies = async () => {
        try {
        let response = await fetch(url + this.props.search)
            console.log(response)
            if (response.ok) {
                let dataRaw = await response.json()
                let data = dataRaw.Search;
                console.log(data)
                this.setState({
                    movies: data,
                    isLoading: false,
                })
            }
            else {
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
            <>
            {this.state.isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error!😨</Alert>
        )}
        <div className="d-flex mt-3 mx-5">
            <h2 className="mx-3 text-white mr-auto">{this.props.search}</h2>
        </div>
        
            <Row className="d-flex justify-content-center mx-3">
                
                {this.state.movies.map((poster) => {
                    return (
                        
                        <img className="image-fix mx-1" variant="top" src={poster.Poster} />
                        
                    )
                })}
            </Row>
            </>
        )
    }
}

export default MyMovies