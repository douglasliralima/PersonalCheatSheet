package com.JCG.SpringBatchJms.model;

import lombok.*;
 
import java.io.Serializable;
 
 
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Person implements Serializable {
 
    private String firstName;
    private String lastName;
}