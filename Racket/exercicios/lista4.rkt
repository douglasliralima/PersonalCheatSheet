#lang racket

(require rackunit rackunit/text-ui)
;;Refazer os exercícios da lista 2 e 3, que podem ser utimizados usando acumulador


;;Lista 2
;;Exercicio 8 ACC

(define (soma-lista lst)
  (define (soma-lista-acc lst acc)
    (if (empty? lst)
        acc
        (soma-lista-acc (rest lst) (+ (first lst) acc))))
  (soma-lista-acc lst 0))


(define-test-suite testes-soma-lista
  (test-equal? "soma da lista vazia"                (soma-lista '())                  0)
  (test-equal? "soma de um número apenas"           (soma-lista '(13))                13)
  (test-equal? "soma de vários números"             (soma-lista (list 5 4 3 2 1))     15)
  (test-equal? "soma de números em ordem diferente" (soma-lista (list 1 2 3 4 5))     15)
  (test-equal? "soma de lista com zero"             (soma-lista (list 1 0 2 0 13 0))  16))

;;Exercicio 9 ACC
(define (mult-lista l)
  (define (mult-lista-optimized l acc)
    (if (equal? l '())
        acc
        (mult-lista-optimized (rest l) (* (first l) acc))))
  (mult-lista-optimized l 1))

(define-test-suite testes-mult-lista
  (test-equal? "produto da lista vazia"            (mult-lista '())                  1)
  (test-equal? "produto de lista com zero"         (mult-lista (list 1 0 2 0 13 0))  0)
  (test-equal? "produto de um número"              (mult-lista '(55))                55)
  (test-equal? "produto de vários números"         (mult-lista (list 1 2 3 4 5))     120)
  (test-equal? "produto de números em outra ordem" (mult-lista (list 2 5 1 4 3))     120))

;;Exercicio 10 ACC
(define (retorna-lista l)
  (if (number? l)
      (list l)
      l))

(define (max-lista l)
  ;;(writeln "Chamada Max-lista")
  (define (max-lista-optimized l acc)
    ;;(write l)
    ;;(writeln acc)
    (cond [ (or (empty? l) (empty? (rest l))) acc]
          [else(max-lista-optimized (rest l) (if (> acc (first l))
                                              acc
                                              (first l)))]))
  (if (empty? l)
      0
      (max-lista-optimized (rest l) (first l))))

(define-test-suite testes-max-lista
  (test-equal? "maximo da lista vazia"       (max-lista '())                     0)
  (test-equal? "maximo de lista unitaria"    (max-lista '(22))                   22)
  (test-equal? "maximo de lista com numeros" (max-lista (list 8 55 13 24 45))    55)
  (test-equal? "maximo não muda com ordem"   (max-lista (list 45 13 8 55 24))    55)
  (test-equal? "maximo de lista com zeros"   (max-lista (list 1 0 13 0 356 0))   356))

;;Exercicio 11-L2 já foi implementado sem chamada em calda

;;Exercicio 12-L2

(define (quadrado-lista l)
  ;;(writeln "Nova chamada quadrado-lista")
  (define (quadrado-lista-acc l newl)
    ;;(write l)
    ;;(write newl)
    ;;(writeln "\n")
    (cond [(empty? l) newl]
          [else (quadrado-lista-acc (rest l) (append newl (list (* (first l) (first l)))))]
    ))
  (if (empty? l)
      l
      (quadrado-lista-acc (rest l) (cons (* (first l) (first l)) '()))))

(define-test-suite testes-quadrado-lista
  (test-equal? "quadrado da lista vazia"  (quadrado-lista '())        '())
  (test-equal? "quadrado de um número"    (quadrado-lista '(5))       '(25))
  (test-equal? "quadrado de números"
               (quadrado-lista (list 2 5 12 25))
               (list 4 25 144 625)))

;;Exercicio 13-L2
(define (impar n)
  ;;Se n é impar, ao dividir ele por dois, seu resultado é float
  (if (= n 0)
      #f
      (if (integer? (/ n 2))
          #f
          #t)))

(define (par n)
  ;;Se n é par, ao dividir ele por dois, seu resultado é integer
  (if (equal? (impar n) #f)
      #t
      #f))

(define (filtra-par l)
  ;;(writeln "Nova requisição")
  (define (filtra-par-acc l lFiltrada)
    ;;(write l)
    ;;(write lFiltrada)
    ;;(writeln "")
    (cond [(empty? l) lFiltrada]
          [(par (first l)) (filtra-par-acc (rest l) (append lFiltrada (list (first l))))]
          [else (filtra-par-acc (rest l) lFiltrada)])
    )
  (filtra-par-acc l '()))




(define-test-suite testes-filtra-par
  (test-equal? "filtragem da lista vazia"     (filtra-par '())                  '())
  (test-equal? "filtragem de lista sem pares" (filtra-par (list 1 3 5 7 9))     '())
  (test-equal? "filtragem de lista com pares" (filtra-par (list 1 2 3 4 5))     (list 2 4))
  (test-equal? "filtragem com todos os itens pares"
               (filtra-par (list 2 4 22 144))
               (list 2 4 22 144)))


;;-----------Lista 3

;;Exercicio 1-L3 não necessita de ACC

;;Exercicio 2-L3
(define (remove-todos x lst)
  ;;(writeln "Nova requisição")
  (define (remove-todos-acc x lst newlst)
    ;;(write x)
    ;;(write lst)
    ;;(write newlst)
    ;;(writeln "\n")
      (cond [(empty? lst) newlst]
            [(equal? (first lst) x) (remove-todos-acc x (rest lst) newlst)]
            [else (remove-todos-acc x (rest lst) (append newlst (list (first lst))))]))
  (remove-todos-acc x lst '()))

(define-test-suite test-remove-todos
  (test-equal? "lista vazia"           (remove-todos 5 '())              '())
  (test-equal? "uma ocorrência"        (remove-todos 5 '(1 3 5 7))       '(1 3 7))
  (test-equal? "múltiplas ocorrências" (remove-todos 5 '(1 3 5 7 5 9))   '(1 3 7 9))
  (test-equal? "nenhuma ocorrência"    (remove-todos 3 '(11 7 23 55 42)) '(11 7 23 55 42)))

;;Ruuuuunnnnnn!!!
(run-tests
 (test-suite "todos os testes"
             testes-soma-lista
             testes-mult-lista
             testes-max-lista
             testes-quadrado-lista
             testes-filtra-par
             test-remove-todos))