-- MySQL dump 10.13  Distrib 5.5.50, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: pets
-- ------------------------------------------------------
-- Server version	5.5.50-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pets`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pets` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `pets`;

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animal` (
  `ani_id` int(11) NOT NULL AUTO_INCREMENT,
  `ani_nome` varchar(20) DEFAULT NULL,
  `ani_raca` int(11) NOT NULL,
  `ani_porte` varchar(12) DEFAULT NULL,
  `ani_situacao` int(11) NOT NULL,
  `ani_usuario` int(11) NOT NULL,
  `ani_latitude` varchar(14) DEFAULT NULL,
  `ani_longitude` varchar(14) DEFAULT NULL,
  `ani_imgpath` varchar(200) DEFAULT NULL,
  `ani_data` datetime DEFAULT NULL,
  PRIMARY KEY (`ani_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` VALUES (1,'Linux',3,'P',1,1,'-30.038461','-51.225828','img/an.jpg',NULL),(2,'Toby',1,'G',3,2,'-30.038105','-51.230539','img/an.jpg',NULL),(3,'Bidu',2,'M',2,1,'-30.0851788','-51.2456802','img/an.jpg',NULL),(4,'Lisa',3,'P',1,1,'-30.0477095','-51.2119397','img/an.jpg',NULL),(5,'Kik',1,'M',3,2,'-30.0606457','-51.1743354','img/an.jpg',NULL),(6,'Luna',3,'P',3,2,'-30.0398083','-51.2235724','img/an.jpg',NULL),(7,'Rex',11,'P',1,2,'-30.02746999','-51.20234013','img/an.jpg',NULL),(8,'Ursa',8,'M',2,2,'-30.04025065','-51.21684551','img/an.jpg',NULL),(9,'Luna',4,'P',1,2,'-30.03594108','-51.23933315','img/an.jpg',NULL),(10,'Preta',15,'P',4,1,'-30.04738333','-51.22903347','img/an.jpg',NULL),(11,'Hulk',13,'G',2,2,'-30.04983507','-51.21246815','img/an.jpg',NULL),(12,'Duba',14,'G',3,1,'-30.05035512','-51.20139599','img/an.jpg',NULL);
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animal_tag`
--

DROP TABLE IF EXISTS `animal_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animal_tag` (
  `anitag_id` int(11) NOT NULL AUTO_INCREMENT,
  `anitag_animal` int(11) NOT NULL,
  `anitag_tag` int(11) NOT NULL,
  PRIMARY KEY (`anitag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal_tag`
--

LOCK TABLES `animal_tag` WRITE;
/*!40000 ALTER TABLE `animal_tag` DISABLE KEYS */;
INSERT INTO `animal_tag` VALUES (1,1,1),(2,1,3),(3,2,2),(4,3,1),(5,3,4),(6,4,1),(7,4,4),(8,5,2),(9,6,2),(10,6,3),(11,1,5),(12,2,6),(13,3,6),(14,4,5),(15,5,7),(16,6,6),(17,8,1),(18,9,7),(19,10,6),(20,11,5),(21,12,7),(22,1,8),(23,4,8),(24,5,8),(25,6,8),(26,9,8),(27,10,8),(28,12,8),(29,7,10),(30,7,1),(31,8,11),(32,9,12),(33,9,4),(34,10,9),(35,10,1),(36,10,3),(37,11,2),(38,11,3),(39,12,2),(40,12,11),(41,7,6),(42,8,6);
/*!40000 ALTER TABLE `animal_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evento` (
  `eve_id` int(11) NOT NULL AUTO_INCREMENT,
  `eve_titulo` varchar(50) NOT NULL,
  `eve_data` datetime NOT NULL,
  `eve_latitude` varchar(14) DEFAULT NULL,
  `eve_longitude` varchar(14) DEFAULT NULL,
  `eve_detalhes` text,
  `eve_user` int(11) NOT NULL,
  PRIMARY KEY (`eve_id`,`eve_data`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raca`
--

DROP TABLE IF EXISTS `raca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `raca` (
  `raca_id` int(11) NOT NULL AUTO_INCREMENT,
  `raca_nome` varchar(25) NOT NULL,
  `raca_tipoanimal` int(11) NOT NULL,
  PRIMARY KEY (`raca_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raca`
--

LOCK TABLES `raca` WRITE;
/*!40000 ALTER TABLE `raca` DISABLE KEYS */;
INSERT INTO `raca` VALUES (1,'LABRADOR',1),(2,'DALMATA',1),(3,'PERSA',2),(4,'SIAMES',2),(5,'SIBERIANO',2),(6,'ANGORA',2),(7,'EGIPCIO',2),(8,'PASTOR ALEMAO',1),(9,'PUG',1),(10,'HUSKY',1),(11,'BULDOGUE',1),(12,'BEAGLE',1),(13,'DOGUE ALEMAO',1),(14,'VIRA LATA',1),(15,'VIRA LATA',2);
/*!40000 ALTER TABLE `raca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `situacao`
--

DROP TABLE IF EXISTS `situacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `situacao` (
  `sit_id` int(11) NOT NULL AUTO_INCREMENT,
  `sit_nome` varchar(15) NOT NULL,
  PRIMARY KEY (`sit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `situacao`
--

LOCK TABLES `situacao` WRITE;
/*!40000 ALTER TABLE `situacao` DISABLE KEYS */;
INSERT INTO `situacao` VALUES (1,'PERDIDO'),(2,'ACHADO'),(3,'ADOCAO'),(4,'VISTO'),(5,'INATIVO');
/*!40000 ALTER TABLE `situacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_tag` varchar(10) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'MANSO'),(2,'AGITADO'),(3,'BRINCALHAO'),(4,'DORMINHOCO'),(5,'FILHOTE'),(6,'ADULTO'),(7,'IDOSO'),(8,'CASTRADO'),(9,'PELUDO'),(10,'TOSADO'),(11,'BRAVO'),(12,'ESPECIAL');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_animal`
--

DROP TABLE IF EXISTS `tipo_animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_animal` (
  `tipoani_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipoani_nome` varchar(10) NOT NULL,
  PRIMARY KEY (`tipoani_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_animal`
--

LOCK TABLES `tipo_animal` WRITE;
/*!40000 ALTER TABLE `tipo_animal` DISABLE KEYS */;
INSERT INTO `tipo_animal` VALUES (1,'Cachorro'),(2,'Gato');
/*!40000 ALTER TABLE `tipo_animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_usuario` (
  `tipouser_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipouser_nome` varchar(20) NOT NULL,
  PRIMARY KEY (`tipouser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (1,'Fisico'),(2,'Ong');
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_nome` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(128) DEFAULT NULL,
  `user_cgc` varchar(18) DEFAULT NULL,
  `user_rank` int(11) DEFAULT NULL,
  `user_tipouser` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Fabiano','fa@senac.com','123',NULL,NULL,1),(2,'Ciro','cs@senac.com','321',NULL,NULL,2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-16 23:32:53
