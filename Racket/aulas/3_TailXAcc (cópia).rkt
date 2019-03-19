#lang racket

#|
Fazer uma função recursiva pura com uma chamada em calda é um jeito
muito ineficiente no que diz respeito a uso de memória e processamento.
Temos melhores resultados usando um acumulador:
|#

(define (soma-lista lst)
  (if (empty? lst) 0
      (+ (first lst) (soma-lista (rest lst)))))

#|
Aqui nos precisamos manter o contexto da função para fazer o calculo
 = (+ 3 (soma-lista '(5 2)))
 = (+ 3 (+ 5(soma-lista '(2))))
 = (+ 3 (+ 5(+ 2(soma-lista '()))
 = (+ 3 (+ 5(+ 2)))
 = (+ 3 + 7)
 = 10
|#


(define (pertence? x lst)
  (cond [(empty? lst) #f]
        [(equal? x (first lst)) #t]
        [else (pertence? x (rest lst))]))

#|
Quando nós não temos que  depender da pilha e vamos direto em direção a calda da lista, ficamos mais próximos
de um loop(while) e chamamos isso de recursividade tail call
(garantida no racket, mas em linguagens nos fazemos isso com a operação tail call otimization)
(pertence? 3 (lista 1 4 5 7)
= (pertence? 3 '(4 5 7)
= (pertence? 3 '(4 5)
= (pertence? 3 '(4)
= (pertence? 3 '()
= #f
|#

(define (soma-lista-acc lst acc)
  (if (empty? lst)
      acc
      (soma-lista-acc (rest lst) (+ (first lst) acc))))

#|
Gastamos muito menos memória com isso, testar as duas funções com numeros grandes, já que aqui acaba não usamos pilhas
(soma-lista-acc '(3 5 2) 0)
 = (soma-lista-acc '(5 2) (+ 3 0))
 = (soma-lista-acc '(2) (+ 5 3)
 = (soma-lista-acc '() (+ 2 8)
 = (soma-lista-acc '() 10)
 = 10
|#

(define (soma-lista-Optimized lst)
  (define (soma-lista-acc lst acc)
    (if (empty? lst)
        acc
        (soma-lista-acc (rest lst) (+ (first lst) acc))))
  (soma-lista-acc lst 0))