#lang racket

(require rackunit rackunit/text-ui)
(require racket/format)
;;
;; Exercício 5 - Padrões de recursividade e funções de alta ordem - Parte 1
;; 

;;
;; --- Questão 1 ----------------------------
;;
;; Com frequência precisamos transformar todos os itens de uma lista
;; de uma mesma forma. Escreva a função map tal que (map f lst) retorna
;; uma lista de mesmo tamanho que lst, mas com cada elemento transformado
;; de acordo com f. Bônus: escreva a função map com recursividade de cauda
;; (tail recursion).
;;
(define (map f lst)
  ;;(writeln "")
  (define (map-acc f lst newlst)
    ;;(write lst)
    ;;(write newlst)
    ;;(writeln "")
    (cond [(empty? lst) newlst]
          [else (map-acc f (rest lst) (append newlst (list (f (first lst)))))])
    )
  (map-acc f lst '())
  )

(define-test-suite test-map
  (test-equal? "mapa sobre a lista vazia"
               (map (lambda (x) x) '())
               '())
  (test-equal? "dobrar todos os números de uma lista"
               (map (lambda (x) (* x 2)) '(3 5 7 11 22))
               '(6 10 14 22 44)))

;;
;; --------- Questão 2 ---------------
;;
;; Agora vamos usar a função map. Crie uma função tamanho-str-lista que, dada
;; uma lista de strings, retorne uma lista com os tamanhos de cada string
;; da lista original, na mesma ordem. Em Racket já existe a função string-length
;; que calcula o tamanho de uma string.
;;
(define (tamanho-str-lista lista-strings)
  (map string-length lista-strings)
  )

(define-test-suite test-tamanho-lista
  (test-equal? "Lista vazia"
               (tamanho-str-lista '())
               '())
  (test-equal? "Algumas strings"
               (tamanho-str-lista (list "Lost" "Fringe" "The Sopranos"))
               (list 4 6 12))
  (test-equal? "Com string vazia"
               (tamanho-str-lista (list "Seven Feet Under" "" "Breaking Bad"))
               (list 16 0 12)))

;;
;; --- Questão 3 ----------------------------
;;
;; Crie uma função soma-5-lista que, dada uma lista de números, retorna uma
;; lista com os números da lista original somados a 5.
;;
(define (soma-5-lista lst)
  (map (lambda (x) (+ x 5)) lst)
  )

(define-test-suite test-soma-5-lista
  (test-equal? "lista vazia" (soma-5-lista '()) '())
  (test-equal? "numeros"     (soma-5-lista (list 37 11 17 0))
                             (list 42 16 22 5)))


;;
;; --- Questão 4 ----------------------------
;;
;; Existem situações em que queremos aplicar um deslocamento a todos os números
;; de uma coleção, por exemplo em aplicações de processamento de sinais ou de
;; análise de dados e machine learning. Crie uma função soma-n-lista que generaliza
;; a função da questão anterior: (soma-n-lista n lst) retorna uma lista de mesmo
;; tamanho que lst mas com n somado a cada número de lst.
(define (soma-n-lista n lst)
  (map (lambda (x) (+ x n)) lst)
  )

(define-test-suite test-soma-n-lista
  (test-equal? "lista vazia"   (soma-n-lista 11 '()) '())
  (test-equal? "soma com zero" (soma-n-lista 0 (list 1 2 3 4 5)) (list 1 2 3 4 5))
  (test-equal? "numeros"       (soma-n-lista 5 (list 37 11 17 0))
                               (list 42 16 22 5))
  (test-equal? "soma com -1"   (soma-n-lista -1 (list 11 22 33 44)) (list 10 21 32 43)))


;;
;; --- Questão 5 ----------------------------
;;
;; Imagine que você está implementando um servidor de lista de discussão por email.
;; Esse servidor precisa anexar um prefixo no assunto de cada email enviado para a
;; lista, contendo o nome da lista. Crie a função adiciona-prefixo para este servidor,
;; de forma que (adiciona-prefixo pre lista-assuntos) retorna uma lista com as strings
;; de lista-assuntos, mas com o prefixo (envolto em colchetes) concatenado no início
;; de cada uma. Veja os testes para exemplos.
;;
;; Dica: a função para concatenar strings em Racket se chama string-append. Nesse
;; exercício, as funções format e ~a também podem ser úteis e até mais fáceis
;; de usar que string-append (procure na documentação). 
;;

(define (adiciona-prefixo pre lista-assuntos)
  ;;(write (string-append (~a "[" pre "]") ( first lista-assuntos)))
  (define (add-prefixo-titulo 
  (cond [(empty? lista-assuntos) '()]
        
        [else (map (lambda (x) (string-append (~a "[" pre "]") x)) lista-assuntos)]
  )


(define-test-suite test-adiciona-prefixo
  (test-equal? "Lista vazia" (adiciona-prefixo "teste" '()) '())
  (test-equal? "String vazia" (adiciona-prefixo "ornitologia" (list ""))
                              (list "[ornitologia]"))
  (test-equal? "Strings variadas"
               (adiciona-prefixo "choque"
                                 (list "Só Magia Top!"
                                       "Show!"
                                       "Tá certa a indignação!"))
               (list "[choque] Só Magia Top!"
                     "[choque] Show!"
                     "[choque] Tá certa a indignação!")))


;; --- Executa todos os testes ---------
(run-tests
 (test-suite "todos os testes"
             test-map
             test-tamanho-lista
             test-soma-5-lista
             test-soma-n-lista
             test-adiciona-prefixo))
