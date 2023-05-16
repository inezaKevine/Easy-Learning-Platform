package com.kevine.Controllers;

import com.kevine.Models.Courses;
import com.kevine.Repository.CoursesRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/courses")
public class CoursesController {
    private final CoursesRepository coursesRepository;

    public CoursesController(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    @GetMapping
    public List<Courses> getCourses() {
        return coursesRepository.findAll();
    }

    record CourseRequest(
            String title,
            String length,
            String instructor,
            String[] modules
    ){}

    @PostMapping
    public void createCourse(@RequestBody CourseRequest request){
        Courses course = new Courses();
        course.setTitle(request.title);
        course.setLength(request.length);
        course.setInstructor(request.instructor);
        course.setModules(request.modules);
        coursesRepository.save(course);
    }

    @GetMapping("{courseId}")
    public Optional<Courses> getCourse(@PathVariable("courseId") Integer id){
        return coursesRepository.findById(id);
    }

    @DeleteMapping("{courseId}")
    public void deleteCourse(@PathVariable("courseId") Integer id){
        Optional<Courses> courseExists = coursesRepository.findById(id);
        coursesRepository.deleteById(id);
    }

    @PatchMapping("{courseId}")
    public void updateCourse(
            @PathVariable("courseId") Integer id,
            @RequestBody CourseRequest request
    ){
        Courses course = new Courses();
        course.setId(id);
        course.setTitle(request.title);
        course.setLength(request.length);
        course.setInstructor(request.instructor);
        course.setModules(request.modules);
        coursesRepository.save(course);
    }

}
