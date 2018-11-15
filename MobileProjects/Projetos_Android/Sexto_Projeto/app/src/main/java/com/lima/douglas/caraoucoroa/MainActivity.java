package com.lima.douglas.caraoucoroa;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    private ImageView botao_jogar;
    private String caracoroa[] = {"Cara", "Coroa"};
    Random randomico = new Random();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final String aux = caracoroa[randomico.nextInt(2)]; //0, 1

        botao_jogar = findViewById(R.id.botao_jogar);
        botao_jogar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, DetalheActivity.class);
                intent.putExtra("opcao", aux);
                startActivity(intent);
            }
        });
    }
}
