package transaction.secure.proj.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import transaction.secure.proj.Model.AuthModel;
import transaction.secure.proj.Repository.AuthRepo;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;
import java.util.Random;

@Service
public class AuthService {
    @Autowired
    private AuthRepo userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public String signup(AuthModel user)
    {
        if(userRepository.findByPhone(user.getPhone()).isPresent())
           return "User already exists!";

        user.setPassword(encoder.encode(user.getPassword()));
        user.setPassword(encoder.encode(user.getPassword()));
        String otp = generateOTP();
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        user.setVerified(false);
        userRepository.save(user);

        return otp;
    }
    public String verifyOtp(String phone, String otp) {
        Optional<AuthModel> opt = userRepository.findByPhone(phone);
        if (opt.isEmpty()) return "User not found";

        AuthModel user = opt.get();
        if (user.getOtp() == null) return "No OTP requested";

        long minutes = ChronoUnit.MINUTES.between(user.getOtpGeneratedTime(), LocalDateTime.now());
        if (minutes > 5) return "OTP expired";

        if (!user.getOtp().equals(otp)) return "Invalid OTP";

        user.setVerified(true);
        user.setOtp(null);
        userRepository.save(user);
        return "✅ Account created successfully!";
    }
    public String login(String phone, String password) {
        Optional<AuthModel> opt = userRepository.findByPhone(phone);
        if (opt.isEmpty()) return "User not found";

        AuthModel user = opt.get();
        if (!encoder.matches(password, user.getPassword())) return "Invalid password";
        String otp = generateOTP();
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);

        return "OTP sent: " + otp;
    }

    public boolean verifySecurityAnswer(String phone, String answer) {
        Optional<AuthModel> opt = userRepository.findByPhone(phone);
        if (opt.isEmpty()) return false;

        return encoder.matches(answer, opt.get().getSecurityAnswer());
    }

    private String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }
}
