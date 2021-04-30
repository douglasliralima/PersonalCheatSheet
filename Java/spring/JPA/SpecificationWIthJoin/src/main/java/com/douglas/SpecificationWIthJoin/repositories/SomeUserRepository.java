package com.douglas.SpecificationWIthJoin.repositories;

import com.douglas.SpecificationWIthJoin.entities.FollowingRelationship;
import com.douglas.SpecificationWIthJoin.entities.SomeUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SomeUserRepository extends JpaRepository<SomeUser, Long>, JpaSpecificationExecutor<SomeUser> {

}