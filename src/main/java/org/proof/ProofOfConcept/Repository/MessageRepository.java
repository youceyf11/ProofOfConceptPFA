package org.proof.ProofOfConcept.Repository;

import org.proof.ProofOfConcept.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
