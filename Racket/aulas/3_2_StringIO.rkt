#lang racket
;;String-length
(string-length "Douglas")

;;String-append
(string-append "Apple" "Banana") ;;Resultado appleBanana


;;Tranforma coisas em string
(require racket/format)
(~a pi)
(~a (list "red" 'green #"blue"))

;;Podemos fazer certas manipulações também
(~a "abcde" #:max-width 4 #:limit-marker "*")

;;E até centralizar textos:
(~a "orange" #:min-width 20 #:align 'center
                #:left-pad-string "- " #:right-pad-string " -")

(~a "[" "orangotango" "]")
