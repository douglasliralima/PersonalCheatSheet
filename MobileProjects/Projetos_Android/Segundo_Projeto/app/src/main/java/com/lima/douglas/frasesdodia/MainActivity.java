package com.lima.douglas.frasesdodia;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private Button botao_frase;
    private TextView frase;
    private String frases[] = {
            "se voce traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos",
            "O maior orgulho da barata é não ter orgulho nenhum" ,
            "O lado positivo de estar no fundo do poço é que o único caminho é para cima"};
    private int aux;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        botao_frase = (Button) findViewById(R.id.botao_frase);
        frase = (TextView) findViewById(R.id.frase);
        frase.setText(frases[0]);
        aux = 0;
        botao_frase.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                aux++;
                aux = aux % 3;
                frase.setText(frases[aux]);
            }
        });
    }
}
