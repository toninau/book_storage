-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: books_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `BookID` int(11) NOT NULL AUTO_INCREMENT,
  `BookinfoID` int(11) NOT NULL,
  `StorageID` int(11) NOT NULL,
  PRIMARY KEY (`BookID`,`BookinfoID`,`StorageID`),
  KEY `fk_books_booksinfo_idx` (`BookinfoID`),
  KEY `fk_books_storages1_idx` (`StorageID`),
  CONSTRAINT `fk_books_booksinfo` FOREIGN KEY (`BookinfoID`) REFERENCES `booksinfo` (`BookinfoID`),
  CONSTRAINT `fk_books_storages1` FOREIGN KEY (`StorageID`) REFERENCES `storages` (`StorageID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (4,10,3),(5,10,4),(6,11,3),(7,12,3),(8,13,3),(9,14,3),(10,15,3),(11,16,3),(12,17,3);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booksgenres`
--

DROP TABLE IF EXISTS `booksgenres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booksgenres` (
  `GenreID` int(11) NOT NULL,
  `BookinfoID` int(11) NOT NULL,
  PRIMARY KEY (`GenreID`,`BookinfoID`),
  KEY `fk_genres_has_booksinfo_booksinfo1_idx` (`BookinfoID`),
  KEY `fk_genres_has_booksinfo_genres1_idx` (`GenreID`),
  CONSTRAINT `fk_genres_has_booksinfo_booksinfo1` FOREIGN KEY (`BookinfoID`) REFERENCES `booksinfo` (`BookinfoID`),
  CONSTRAINT `fk_genres_has_booksinfo_genres1` FOREIGN KEY (`GenreID`) REFERENCES `genres` (`GenreID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booksgenres`
--

LOCK TABLES `booksgenres` WRITE;
/*!40000 ALTER TABLE `booksgenres` DISABLE KEYS */;
INSERT INTO `booksgenres` VALUES (4,10),(5,10),(4,11),(4,12),(4,13),(4,14),(4,15),(4,16),(6,17);
/*!40000 ALTER TABLE `booksgenres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booksinfo`
--

DROP TABLE IF EXISTS `booksinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booksinfo` (
  `BookinfoID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(300) NOT NULL,
  `PublicationYear` int(11) NOT NULL,
  `Author` varchar(300) NOT NULL,
  `ISBN` varchar(45) NOT NULL,
  PRIMARY KEY (`BookinfoID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booksinfo`
--

LOCK TABLES `booksinfo` WRITE;
/*!40000 ALTER TABLE `booksinfo` DISABLE KEYS */;
INSERT INTO `booksinfo` VALUES (10,'Harry Potter and the Philosopher\'s Stone',1997,'J. K. Rowling','0-7475-3269-9'),(11,'Harry Potter and the Chamber of Secrets',1998,'J. K. Rowling','0-7475-3849-2'),(12,'Harry Potter and the Prisoner of Azkaban',1999,'J. K. Rowling','0-7475-4215-5'),(13,'Harry Potter and the Goblet of Fire',2000,'J. K. Rowling','0-7475-4624-X'),(14,'Harry Potter and the Order of the Phoenix',2003,'J. K. Rowling','0-7475-5100-6'),(15,'Harry Potter and the Half-Blood Prince',2005,'J. K. Rowling','0-7475-8108-8'),(16,'Harry Potter and the Deathly Hallows',2007,'J. K. Rowling','0-545-01022-5'),(17,'Todennäköisyyslaskenta ja tilastomatematiikka',2006,'Eero Launonen, Esko Sorvali, Pertti Toivonen','951-0-32264-4');
/*!40000 ALTER TABLE `booksinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `GenreID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`GenreID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (4,'Fantasy'),(5,'Fiction'),(6,'Textbook');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storages`
--

DROP TABLE IF EXISTS `storages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storages` (
  `StorageID` int(11) NOT NULL AUTO_INCREMENT,
  `Storage` varchar(300) NOT NULL,
  `Location` varchar(300) NOT NULL,
  PRIMARY KEY (`StorageID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storages`
--

LOCK TABLES `storages` WRITE;
/*!40000 ALTER TABLE `storages` DISABLE KEYS */;
INSERT INTO `storages` VALUES (3,'Test Storage 1','Test Location 1'),(4,'Test Storage 2','Test Location 2');
/*!40000 ALTER TABLE `storages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-03 23:58:04
