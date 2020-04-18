// ---------- CONDITIONALS ----------
//Aqui não tem segredo não, igual JAVA, com a diferença entre == e ===
    // Relational Operators : == != > < >= <=
    // === : Equal value and type, mais usado
    // Logical Operators : && \\ !
    
    var age = 8;
    
    if ((age >= 5) && (age <= 6)){
      document.write("Go to Kindergarten<br />");
    } else if (age > 18) {
      document.write("Go to College<br />");
    } else {
      document.write("Go to Grade ", age - 5, "<br />");
    }
    
    document.write("true || false = ", true || false, "<br />");
    
    document.write("!true = ", ! true, "<br />");
    
    //O == ele checa independente do tipo, se o valor corresponde
    document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
    
    //Pessoal usa mais esse aqui, aqui comparamos tanto o tipo, quanto o valor
    document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
    
    // Switch is used to match a limited number of options
    switch(age) {
      case 5 :
      case 6 :
        document.write("Go to Kindergarten<br />");
        break;
    
      case 7 :
        document.write("Go to 1st Grade<br />");
        break;
    
      default :
        document.write("Subtract 5 from your age<br />");
    }
    
    // Ternary Operator assigns a value based on a condition
    // (condition) ? iftrue : ifFalse
    var canIVote = (age >= 18) ? true : false;
    
    document.write("Can I Vote : ", canIVote, "<br />");
    