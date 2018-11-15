package com.lima.douglas.signos;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MainActivity extends Activity {
    private ListView listasignos;
    private String signos[] = {
            "Aries", "Touro", "Gemeos", "Cancer", "Leao", "Virgem",
            "Libra", "Escorpiao", "Sagitario", "Capricornio", "Aquario",
            "peixes"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listasignos = findViewById(R.id.signosid);

        ArrayAdapter<String> signosNormalizado = new ArrayAdapter<String>(
                getApplicationContext(),
                android.R.layout.simple_list_item_1,
                android.R.id.text1,
                signos
        );

        listasignos.setAdapter(signosNormalizado);

        listasignos.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Toast.makeText(MainActivity.this,
                        listasignos.getItemAtPosition(i).toString(), Toast.LENGTH_SHORT).show();
            }
        });

    }
}
