package com.lima.douglas.gasolinaoualcool;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private Button botao_verificar;
    private EditText preco_gasolina;
    private EditText preco_alcool;
    private TextView texto_resultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        botao_verificar = findViewById(R.id.botao_verificar);
        preco_alcool = findViewById(R.id.preco_alcool);
        preco_gasolina = findViewById(R.id.preco_gasolina);
        texto_resultado = findViewById(R.id.texto_resultado);

        botao_verificar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                double alcool = Double.parseDouble(preco_alcool.getText().toString());
                double gasolina = Double.parseDouble(preco_gasolina.getText().toString());

                if(alcool/gasolina < 0.7) texto_resultado.setText("Alcool está valendo mais a pena");
                else texto_resultado.setText("Gasolina está valendo mais a pena");
                Toast.makeText(getApplicationContext(), "Melhor combustível calculado", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
