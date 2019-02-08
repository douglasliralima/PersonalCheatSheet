#lang racket

(require rackunit rackunit/text-ui)

;;
;; Tarefa 3
;;
;; Nesta tarefa faremos um pouco de revisão mas também vamos explorar
;; algumas técnicas novas.
;;

;; Vimos antes como escrever funções recursivas para lidar com listas, baseando
;; a estrutura do código na estrutura recursiva das listas.

;; Lembrando: uma lista satisfaz um dos seguintes casos:
;; 1. é a lista vazia, '()
;; 2. é o cons de um elemento na frente de uma outra lista, (cons x lst)
;;    onde x é o elemento e lst a lista

;; Nas primeiras duas questões podemos continuar com essa estrutura:

;; --- Questão 1 ----------------------------

;; Escreva uma função remove-primeiro tal que
;; (remove-primeiro x lst) remove a primeira ocorrência do elemento x
;; na lista lst (se houver), retornando uma nova lista com o resultado.
;; Veja os testes para exemplos.
(define (remove-primeiro x lst)
  (cond[(empty? lst) '()]
       [(equal? (first lst) x) (rest lst)]
       [else (cons (first lst) (remove-primeiro x (rest lst)))]))

(define-test-suite test-remove-primeiro
  (test-equal? "lista vazia"
               (remove-primeiro 5 '())              '())
  
  (test-equal? "uma ocorrência"
               (remove-primeiro 5 '(1 3 5 7))       '(1 3 7))
  
  (test-equal? "múltiplas ocorrências"
               (remove-primeiro 5 '(1 3 5 7 5 9))   '(1 3 7 5 9))
  
  (test-equal? "nenhuma ocorrência"
               (remove-primeiro 3 '(11 7 23 55 42)) '(11 7 23 55 42)))


;; --- Questão 2 ----------------------------

;; Escreva uma função remove-todos tal que
;; (remove-todos x lst) remove todas as ocorrencias do elemento x
;; na lista lst (se houver), retornando uma nova lista com o resultado.
(define (remove-todos x lst)
  ;; A função cond faz if's encadeados
  (cond [(empty? lst) '()]
        [(equal? (first lst) x) (remove-todos x (rest lst))]
        [else (cons (first lst) (remove-todos x (rest lst)))]))

(define-test-suite test-remove-todos
  (test-equal? "lista vazia"           (remove-todos 5 '())              '())
  (test-equal? "uma ocorrência"        (remove-todos 5 '(1 3 5 7))       '(1 3 7))
  (test-equal? "múltiplas ocorrências" (remove-todos 5 '(1 3 5 7 5 9))   '(1 3 7 9))
  (test-equal? "nenhuma ocorrência"    (remove-todos 3 '(11 7 23 55 42)) '(11 7 23 55 42)))


(run-tests
 (test-suite "todos os testes"
             test-remove-primeiro
             test-remove-todos))
