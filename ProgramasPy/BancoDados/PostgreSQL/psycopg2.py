import psycopg2

#Conexão com o DB
con = psycopg2.connect(
            host = "husseinmac",
            database="husseindb",
            user = "postgres",
            password = "postgres",
            port = 5432) 

#cursor - Vai executar os nossos comandos SQL
cur = con.cursor()

cur.execute("insert into employees (id, name) values (%s, %s)", (1, "Hussein") )

#execute query
cur.execute("select id, name from employees")

rows = cur.fetchall()

for r in rows:
    print (f"id {r[0]} name {r[1]}")

#commit the transcation 
con.commit()

#close the cursor
cur.close()

#close the connection
con.close()