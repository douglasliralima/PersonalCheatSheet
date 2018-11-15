package com.lima.douglas.idadedecachorro;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText caixaTexto;
    private Button botao_idade;
    private TextView resultadoIdade;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        caixaTexto = findViewById(R.id.idade_cachorro);
        botao_idade = findViewById(R.id.botao_idade);
        resultadoIdade = findViewById(R.id.idade_humano);

        botao_idade.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                    String valor = caixaTexto.getText().toString();
                    //Primeiro verificamos se a String está vazia
                    if(valor.isEmpty()){
                        //String vazia
                    }else{
                        int idade = Integer.parseInt(valor);
                        idade = idade * 7;
                        resultadoIdade.setText(idade + " anos");
                    }
            }
        });
    }
}
