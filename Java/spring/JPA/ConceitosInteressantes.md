* A JPA(Java Persistence API) é apenas uma especificação, uma interface, que é implementada por outros frameworks de relacionamento-objeto como o hibernate

* Com isso, as vezes temos alguns recursos disponíveis pelo hibernate, mas que ainda não foi especificado pelo JPA, usa-los significa abrir mão da generalidade que o JPA te dá

* O spring data nos trás toda uma stack ao qual podemos tanto trabalhar com elas em separado, como em conjunto conforme sua arquitetura, que é pela spring data -> JPA -> Hibernate -> JDBC -> Driver -> Db