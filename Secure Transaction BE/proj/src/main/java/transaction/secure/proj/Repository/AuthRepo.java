package transaction.secure.proj.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import transaction.secure.proj.Model.AuthModel;
import java.util.Optional;

@Repository
public interface AuthRepo extends JpaRepository<AuthModel, Long> {
    Optional<AuthModel> findByPhone(String phone);
}

