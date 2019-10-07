# book storage

## After cloning
npm install <br>
import books_db.sql to your MySQL database <br>
make necessary changes to connection.js <br>
npm start / node server.js

## REST v1

### Create

#### Book

http://localhost:8081/api/v1/books <br>
Creates book. ID is given automatically

```
Example:
POST http://localhost:8081/api/v1/books
Content-Type: application/json
Body
{
	"Title": "Test Title",
	"Author": "Test Author",
	"PublicationYear": 2019,
	"ISBN":"Test ISBN",
	"StorageID": 3,
	"GenreID": 6
}
```

#### Genre

http://localhost:8081/api/v1/genres <br>
Creates genre. ID is given automatically

```
Example:
POST http://localhost:8081/api/v1/genres
Content-Type: application/json
Body
{
	"Name": "Test Genre"
}
```

#### Storage

http://localhost:8081/api/v1/storages <br>
Creates Storage. ID is given automatically

```
Example:
POST http://localhost:8081/api/v1/storages
Content-Type: application/json
Body
{
	"Storage": "Test Storage Name",
	"Location": "Test Location",
}
```

### Read

#### Book

http://localhost:8081/api/v1/books <br>

Retrieves all the books from the database. Returns an array if books were found.

```
Example:
GET http://localhost:8081/api/v1/books
```

http://localhost:8081/api/v1/books/(ID) <br>

Retrieves book from the database with matching ID. 

```
Example:
GET http://localhost:8081/api/v1/books/2
```

http://localhost:8081/api/v1/books?(filter)=(value)(&) <br>

Retrieves all the books from the database that match the filter. 

```
Example:
GET http://localhost:8081/api/v1/books?title=harry&yearMax=2005
```
##### FILTER OPTIONS:
author <br>
title <br>
storageID <br>
yearMax <br>
yearMin <br>
isbn <br>
genre <br>

##### Books found

```
[
    {
        "BookID": 4,
        "Title": "Harry Potter and the Philosopher's Stone",
        "PublicationYear": 1997,
        "Author": "J. K. Rowling",
        "ISBN": "0-7475-3269-9",
        "Genres": "Fiction,Fantasy",
        "StorageID": 3,
        "Location": "Test Location 1",
        "Storage": "Test Storage 1"
    },
```

### Update

#### Book

http://localhost:8081/api/v1/books(ID) <br>
Updates book

```
Example:
PUT http://localhost:8081/api/v1/books/1
Content-Type: application/json
Body
{
	"Title": "Title update",
	"Author": "Author update",
	"PublicationYear": 2000,
	"ISBN":"ISBN update"
}
```
#### Genre

http://localhost:8081/api/v1/genres(ID) <br>
Updates genre

```
Example:
PUT http://localhost:8081/api/v1/genre/1
Content-Type: application/json
Body
{
	"Name": "Genre name update"
}
```

#### Storage

http://localhost:8081/api/v1/storages(ID) <br>
Updates storage

```
Example:
PUT http://localhost:8081/api/v1/storage/1
Content-Type: application/json
Body
{
	"Storage": "Storage name update",
	"Location": "Storage location update"
}
```

### Delete

#### Book

http://localhost:8081/api/v1/books/(ID) <br>

Deletes book

```
Example:
DELETE http://localhost:8081/api/v1/books/1
```
#### Genre

http://localhost:8081/api/v1/genres/(ID) <br>

Deletes genre

```
Example:
DELETE http://localhost:8081/api/v1/genres/1
```

#### Storage

http://localhost:8081/api/v1/storages/(ID) <br>

Deletes storage

```
Example:
DELETE http://localhost:8081/api/v1/storages/1
```
