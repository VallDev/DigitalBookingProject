package com.digitalbooking.proyect.security;

import com.digitalbooking.proyect.model.UserEntity;
import com.digitalbooking.proyect.repository.UserRepository;
import com.digitalbooking.proyect.security.DTO.AuthenticationDTORequest;
import com.digitalbooking.proyect.security.DTO.AuthenticationDTOResponse;
import com.digitalbooking.proyect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private MyPasswordEncoder myPasswordEncoder;
    @Autowired
    UserRepository userRepository;

//    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationDTORequest authenticationDTORequest) throws Exception {
        UserEntity user = userRepository.findByUsername(authenticationDTORequest.getUsername());

        if (user != null && myPasswordEncoder.matchesPassword(authenticationDTORequest.getPassword(),user.getPassword())){
            final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationDTORequest.getUsername());
            final String jwt = jwtService.generateToken(userDetails);
            return ResponseEntity.ok(new AuthenticationDTOResponse((jwt), user.getId()));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}

       /* try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTORequest.getUsername(), authenticationDTORequest.getPassword()));
        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails  userDetails = userDetailsService.loadUserByUsername(authenticationDTORequest.getUsername());
        final String jwt = jwtService.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationDTOResponse((jwt)));
    }
}*/
