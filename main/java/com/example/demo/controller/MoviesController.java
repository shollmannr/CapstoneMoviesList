package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.MovieNotFoundException;
import com.example.demo.model.Movies;
import com.example.demo.repository.MoviesRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class MoviesController {

@Autowired
	private MoviesRepository moviesRepo;

	//get all students
	
	@GetMapping("/allmovies")
	public List<Movies> getAllmovies()
	{
		return moviesRepo.findAll();
	}
	

	@PostMapping("/addmovies")
    public Movies newStudent(@RequestBody Movies movies)
    {
		return moviesRepo.save(movies);
    }
	
	
	@GetMapping("/movies/{id}")
	public ResponseEntity<Movies> getStudentById(@PathVariable int id)
	{
		Movies movie= moviesRepo.findById(id).orElseThrow(() ->  new MovieNotFoundException("Movie not found"));
		return ResponseEntity.ok(movie);                     
	}
	
	
	
	@PutMapping("/movies/{id}")
	public ResponseEntity<Movies> updateMovie(@PathVariable int id, @RequestBody Movies movie)
	{
		Movies m= moviesRepo.findById(id).orElseThrow(() ->  new MovieNotFoundException("Student not found"));
	    m.setTitle(movie.getTitle());
	    m.setRelease_date(movie.getRelease_date());
	    Movies updatedMovie=moviesRepo.save(m);
	    return ResponseEntity.ok(updatedMovie);
	}
	

	
	@DeleteMapping("/movie/{id}")
	public String deleteMovie(@PathVariable int id)
	{
		moviesRepo.findById(id).orElseThrow(() ->  new MovieNotFoundException("Movie not found"));
	    moviesRepo.deleteById(id);
	    return "The movie with id: "+ id +" is removed from the database.";
	}
	
}
