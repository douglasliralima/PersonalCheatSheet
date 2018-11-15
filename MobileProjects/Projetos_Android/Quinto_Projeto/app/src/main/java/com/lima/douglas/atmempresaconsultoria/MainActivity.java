package com.lima.douglas.atmempresaconsultoria;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends Activity {
    ImageView botao_empresa;
    ImageView botao_cliente;
    ImageView botao_servico;
    ImageView botao_contato;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        botao_empresa = findViewById(R.id.empresaid);
        botao_cliente = findViewById(R.id.clientesid);
        botao_servico = findViewById(R.id.servicosid);
        botao_contato = findViewById(R.id.contatoid);

        botao_empresa.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, EmpresaActivity.class));
            }
        });

        botao_cliente.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, ClienteActivity.class));
            }
        });

        botao_servico.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent teste = new Intent(MainActivity.this, ServicoActivity.class);
                startActivity(teste);
            }
        });

        botao_contato.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, ContatoActivity.class));
            }
        });
    }
}
