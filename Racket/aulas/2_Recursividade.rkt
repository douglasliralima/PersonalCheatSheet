;; Para fazermos qualquer import, basta usar o comando
#lang racket

(require rackunit rackunit/text-ui)
(require rackunit rackunit/gui)

(define a 42)
(define b 14)

(define-test-suite exercicios-1-e-2
  (test-equal? "a deve ser 42" a 42)
  (test-equal? "a deve ser 14" b 14)
  )

(define-test-suite exercicios-3
  (test-equal? "a deve ser 42" (+ a b) 56)
  (test-equal? "a deve ser 14" (- a b) 28)
  )
;;Podemos fazer testes automátizados, desde no terminal
(run-tests exercicios-1-e-2)

;;Podemos no racket fazer contratos, funções em que para funcionar nos temos condições especificas para funcionar
(define/contract (potencia x y)
  (-> number? (and/c integer? (>=/c 3))
      number?)
  (if(= y 0)
     1
     (* x (potencia x (- y 1))))
  )

;;Função recursiva para realizar essa função
(define (soma n m)
  ;;Vamos ir subtraindo até o m chegar em 0 que é sua base
  (if(= m 0)
    ;;Nesse momento retornamos o n
    n
    ;;Vamos indo então pegando o seu sucessor até acabar as chamadas recursivas de função
    (+ 1 (soma n (- m 1)))
    )
  )

;;
(define-test-suite testes-soma
  (test-equal? "2 + 3" (soma 2 3) 5)
  (test-equal? "10 + 0" (soma 10 0) 10)
  (test-equal? "0 + 0" (soma 0 0) 0)
  (test-equal? "0 + 21" (soma 0 21) 21)
  (test-equal? "1 + 34" (soma 1 34) 35)
  (test-equal? "7 + 7" (soma 7 7) 14)
  )

;;Para fazer a multplicacao é mais pau
(define (mult n m)
  ;;Sempre vamos ir até a base e retorna-la
  (if (= m 0)
      0
      ;; Para isso vamos sempre pegando a soma
      (soma n (mult n (- m 1)))
      )
  )
(define-test-suite testes-mult
  (test-equal? "3 * 4" (mult 3 4) 12)
  (test-equal? "5 * 0" (mult 5 0) 0)
  (test-equal? "0 * 5" (mult 0 5) 0)
  (test-equal? "13 * 1" (mult 13 1) 13)
  (test-equal? "1 * 13" (mult 1 13) 13)
  )

;;Vamos agora para listas, listas só tem duas caracteristicas
'()                                     ;listas vazias
'(cons 1 '())
(define lista1 (list 1))           ;(1)
(define lista2 (list 2 1))         ;(2, 1)

(define-test-suite testes-listas
  (test-equal? "Lista 1" lista1 '(1))
  (test-equal? "Lista 2" lista2 '(2 1))
  )

;;Até em GUI para visualizar se deu tudo certo acaba sendo melhor
(test/gui (test-suite "Todos os testes"
                      exercicios-1-e-2
                      exercicios-3
                      testes-soma
                      testes-mult
                      testes-listas))