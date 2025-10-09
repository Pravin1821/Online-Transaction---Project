package transaction.secure.proj.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import transaction.secure.proj.Model.AuthModel;
import transaction.secure.proj.Service.AuthService;

@RestController
@RequestMapping("/api/auth")
//@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody AuthModel user) {
        return authService.signup(user);
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody OtpRequest request) {
        return authService.verifyOtp(request.getPhone(), request.getOtp());
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return authService.login(request.getPhone(), request.getPassword());
    }

    // Request DTOs
    static class OtpRequest {
        private String phone;
        private String otp;
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getOtp() { return otp; }
        public void setOtp(String otp) { this.otp = otp; }
    }

    static class LoginRequest {
        private String phone;
        private String password;
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
}

