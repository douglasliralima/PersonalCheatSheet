package com.lima.douglas.caraoucoroa;

import android.app.Activity;
import android.content.Intent;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class DetalheActivity extends Activity {
    private ImageView botao_volta;
    private ImageView label_moeda;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhe);
        botao_volta = findViewById(R.id.botao_voltar);
        label_moeda = findViewById(R.id.moedaid);

        Bundle extra = getIntent().getExtras();
        if(extra != null) {//Fazemos isso para ter certeza que a activity foi acessada corretamente
            String moeda = extra.getString("opcao");

            if(moeda.equals("Cara")){
                label_moeda.setImageDrawable(ContextCompat.getDrawable(this, R.drawable.moeda_cara));
            }else {
                label_moeda.setImageDrawable(ContextCompat.getDrawable(this, R.drawable.moeda_coroa));
            }

        }else {
            System.out.println("Retorno nulo no bandle");
        }

        botao_volta.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(DetalheActivity.this, MainActivity.class));
            }
        });

    }
}
