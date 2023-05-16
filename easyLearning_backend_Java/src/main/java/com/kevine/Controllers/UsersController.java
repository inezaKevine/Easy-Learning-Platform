package com.kevine.Controllers;

import com.kevine.Models.Users;
import com.kevine.Repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/users")
public class UsersController {
    private final UserRepository userRepository;

    public UsersController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    record NewUserRequest(
            String name,
            String email,
            Integer age,
            String role
    ){}

    @PostMapping
    public void addUser(@RequestBody NewUserRequest request){
        Users user = new Users();
        user.setName(request.name);
        user.setAge(request.age);
        user.setEmail(request.email);
        user.setRole(request.role);
        userRepository.save(user);
    }

    @GetMapping("{userId}")
    public Optional<Users> getUser(@PathVariable("userId") Integer id){
        return userRepository.findById(id);
    }

    @DeleteMapping("{userId}")
    public void deleteUser(@PathVariable("userId") Integer id){
        Optional<Users> userExists = userRepository.findById(id);
        userRepository.deleteById(id);
    }

    @PatchMapping("{userId}")
    public void updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody NewUserRequest request
    ){
        Users user = new Users();
        user.setId(id);
        user.setName(request.name);
        user.setEmail(request.email);
        user.setAge(request.age);
        user.setRole(request.role);
        userRepository.save(user);
    }
}
