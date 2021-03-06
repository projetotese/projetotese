import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode

try:
    connection = mysql.connector.connect(host='127.0.0.1',
                                         database='registoeventos',
                                         user='root',
                                         password='dissertacao')
                                         
    mySql_insert_query = """INSERT INTO teste (idteste, Nome1, Tipo, Numero, Obs) 
                           VALUES 
                           (150, 'Exemplo P71', 'ass', 123, 'datetime.datetime.now()') """

    cursor = connection.cursor()
    cursor.execute(mySql_insert_query)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into teste table")
    cursor.close()

except mysql.connector.Error as error:
    print("Failed to insert record into teste table {}".format(error))

finally:
    if (connection.is_connected()):
        connection.close()
        print("MySQL connection is closed")

