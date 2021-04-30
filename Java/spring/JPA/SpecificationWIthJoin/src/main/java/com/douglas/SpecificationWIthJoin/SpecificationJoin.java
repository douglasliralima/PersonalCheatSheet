package com.douglas.SpecificationWIthJoin;

import com.douglas.SpecificationWIthJoin.entities.FollowingRelationship;
import com.douglas.SpecificationWIthJoin.entities.Product;
import com.douglas.SpecificationWIthJoin.entities.SomeUser;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class SpecificationJoin {

    public static Specification<Product> joinTest(SomeUser input) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            Join<Product,SomeUser> userProd = root.join("owner");
            Join<FollowingRelationship,Product> prodRelation = userProd.join("ownedRelationships");
            return criteriaBuilder.equal(prodRelation.get("follower"), input);
        };
    }

    public static Specification<SomeUser> userHasName(String name) {
        return (root, query, criteriaBuilder) -> 
                criteriaBuilder.equal(root.get("name"), name);
    }
}
