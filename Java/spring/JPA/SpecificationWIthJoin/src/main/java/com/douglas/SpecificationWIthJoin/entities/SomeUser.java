package com.douglas.SpecificationWIthJoin.entities;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;


@Entity
@Getter
@Setter
public class SomeUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(mappedBy = "owner", fetch = FetchType.EAGER)
    private Set<Product> products = new HashSet<Product>();

    @OneToMany(mappedBy = "owner", fetch = FetchType.EAGER)
    private Set<FollowingRelationship> ownedRelationships = new HashSet<FollowingRelationship>();

    @OneToMany(mappedBy = "follower", fetch = FetchType.EAGER)
    private Set<FollowingRelationship> followedRelationships = new HashSet<FollowingRelationship>();

    //Por algum motivo ele não aceitou o @data com o to string setado pelo lombok
    @Override
    public String toString() {
        return this.getId() + " | " + this.getName();
    }
}