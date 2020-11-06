import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode

try:
    connection = mysql.connector.connect(host='127.0.0.1',
                                         database='registoeventos',
                                         user='root',
                                         password='dissertacao')
                                         
    mySql_insert_query = """UPDATE teste SET Tipo= 'ventura' WHERE idteste= 10; """

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

