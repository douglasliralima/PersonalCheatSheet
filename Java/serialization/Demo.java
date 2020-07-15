import java.io.Serializable; 

//Para serializar uma classe, usamos a interface Serializable
class Demo implements Serializable 
{ 
    public int a; 
    public String b; 
  
    // Default constructor 
    public Demo(int a, String b) 
    { 
        this.a = a; 
        this.b = b; 
    } 
  
} 