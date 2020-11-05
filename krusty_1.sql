-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: krusty_one
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `order_status` tinyint DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `shipped_date` date DEFAULT NULL,
  `total_price` decimal(4,2) DEFAULT NULL,
  `to_street` varchar(45) DEFAULT NULL,
  `to_city` int DEFAULT NULL,
  `to_state` varchar(45) DEFAULT NULL,
  `to_country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  CONSTRAINT `order_owner` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` decimal(4,2) DEFAULT NULL,
  `storeid` int DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `subcategoryid` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `stockquantity` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_id_UNIQUE` (`id`),
  KEY `products_category_idx` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (23,'Croissant',1.25,NULL,'bakedgoods',NULL,NULL,NULL,'https://img.delicious.com.au/RzgR3kXD/w1200/del/2015/12/cornetti-italian-croissants-24713-1.jpg'),(24,'Apple Pie',5.00,NULL,'bakedgoods',NULL,NULL,NULL,'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg'),(25,'Chocolate Chip Cookies (20)',6.00,NULL,'bakedgoods',NULL,NULL,NULL,'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg'),(26,'Coca Cola (2 liters)',2.50,NULL,'beverages',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/41dTLcv4%2BEL._SX425_.jpg'),(27,'Polar Seltzer Water (12 oz, 12 cans) ',4.50,NULL,'beverages',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/51SyDRx9HKL._AC_SY400_.jpg'),(28,'Tropicana Orange Juice (89 oz)',6.50,NULL,'beverages',NULL,NULL,NULL,'https://s4.sywcdn.net/getImage?url=http%3A%2F%2Fs.shld.net%2Fis%2Fimage%2FSears%2Fspin_prod_ec_774455001&t=Product&w=380&h=380&qlt=100&mrg=1&str=1&s=ae4aac966d621766512a74dba967b920'),(29,'Chocolate Chip Quadruple Pancake Stack',6.00,NULL,'cafeanddeli',NULL,NULL,NULL,'https://www.kitchentreaty.com/wp-content/uploads/2013/06/IMG_7767.jpg'),(31,'Bacon and Eggs',4.00,NULL,'cafeanddeli',NULL,NULL,NULL,'https://res.cloudinary.com/mealthy1/image/upload/ar_16:11,c_fill,f_auto,h_760,q_auto:best,w_1140/v1512498348/Breakfast/breakfast-Grits-Bowl.png'),(32,'Coffee',2.00,NULL,'cafeanddeli',NULL,NULL,NULL,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'),(33,'Bushs Best Vegetarian Baked Beans',2.00,NULL,'cannedfood',NULL,NULL,NULL,'https://bushbeans.com/sites/default/files/styles/product_hero_2x/public/product/602-2902-Hero-Original.jpg?itok=3ZqkX1RT'),(34,'Progresso Chicken Noodle Soup',2.50,NULL,'cannedfood',NULL,NULL,NULL,'https://www.meijer.com/content/dam/meijer/product/0004/11/9601/08/0004119601088_3_A1C1_1200.png'),(35,'Del Monte Tomato Sauce',2.25,NULL,'cannedfood',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/71NkUOPpaDL._SX425_PIbundle-48,TopRight,0,0_AA425SH20_.jpg'),(36,'Disposable Masks (50 Masks)',15.00,NULL,'cleaningandsafety',NULL,NULL,NULL,'https://i5.walmartimages.com/asr/fed6850d-bbbc-4370-90fa-069b2bbd33bd.7a6fb9af8948beff56e0223303f26817.jpeg'),(37,'Disposable Gloves (Large, 100 pack)',10.00,NULL,'cleaningandsafety',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/81Rhzlq6PlL._AC_SL1500_.jpg'),(38,'Lysol All-purpose cleaner',5.00,NULL,'cleaningandsafety',NULL,NULL,NULL,'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/jhoAAOSwpPpdVaAY/$_1.JPG?set_id=8800005007'),(39,'Frenchs Yellow Mustard',3.00,NULL,'condiments',NULL,NULL,NULL,'https://produits.bienmanger.com/27673-0w470h470_French_Classic_Yellow_Mustard.jpg'),(40,'Heinz Ketchup',3.00,NULL,'condiments',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/71szc59Y0aL._SL1500_.jpg'),(41,'Kikkoman Soy Sauce (5 oz)',1.00,NULL,'condiments',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/51yTQl0vyEL._SL1200_.jpg'),(43,'Kraft American Singles (16 slices)',5.00,NULL,'dairy',NULL,NULL,NULL,'https://images.heb.com/is/image/HEBGrocery/001199858'),(44,'Milk (1 gallon)',3.25,NULL,'dairy',NULL,NULL,NULL,'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/1/5/15966601_main.jpg'),(45,'Polly-O Mozzarella (16 oz)',5.00,NULL,'dairy',NULL,NULL,NULL,'https://www.freshdirect.com/media/images/product/dairy_16/dai_polly_o_mozzarel_01_j.jpg?lastModify=2018-10-09'),(46,'Safal Green Peas',2.00,NULL,'frozenfoodandicecream',NULL,NULL,NULL,'https://cdn.shopify.com/s/files/1/0004/9325/6762/products/safal_green_peas_1200x1200.jpg?v=1530181315'),(47,'Breyers Ice Cream',2.50,NULL,'frozenfoodandicecream',NULL,NULL,NULL,'https://www.kroger.com/product/images/large/front/0007756725425'),(49,'FlaVorIce Icies',4.00,NULL,'frozenfoodandicecream',NULL,NULL,NULL,'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/0/fnd_twitter-ice-pops.jpg.rend.hgtvcom.616.462.suffix/1559601434002.jpeg'),(51,'Bundle of Bananas',2.25,NULL,'produce',NULL,NULL,NULL,'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg'),(52,'Orange',0.60,NULL,'produce',NULL,NULL,NULL,'https://www.marlerblog.com/files/2013/03/orange.jpg'),(53,'Red Apple',0.60,NULL,'produce',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/319J7YpfyNL.jpg'),(54,'Ground Beef (1 lb)',5.00,NULL,'meatandseafood',NULL,NULL,NULL,'https://www.meijer.com/content/dam/meijer/product/0020/11/5500/00/0020115500000_1_A1C1_1200.png'),(55,'Raw Chicken (7 lb)',14.00,NULL,'meatandseafood',NULL,NULL,NULL,'https://foodpoisoningbulletin.com/wp-content/uploads/Raw-Chicken-2.jpg'),(56,'Salmon (2 fillets)',7.00,NULL,'meatandseafood',NULL,NULL,NULL,'https://cdn.apartmenttherapy.info/image/upload/v1558443004/k/archive/688474b6e79ed4d8866168647c35606eebbfd9c7.jpg'),(57,'Amazonbasics Stapler',6.00,NULL,'officesupplies',NULL,NULL,NULL,'https://m.media-amazon.com/images/I/51Z8W3EiMpL._AC_SS350_.jpg'),(58,'Mead Notebook',1.00,NULL,'officesupplies',NULL,NULL,NULL,'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1091598-847&recipeName=680'),(59,'Swingline 3 Hole Puncher',7.00,NULL,'officesupplies',NULL,NULL,NULL,'https://images-na.ssl-images-amazon.com/images/I/51VUY3n6CZL._AC_SL1000_.jpg'),(60,'Reeses 2 Peanut Butter Cups',1.00,NULL,'snacks',NULL,NULL,NULL,'https://www.hersheys.com/content/dam/reeses/en_us/images/products/00034000004409-0010.png'),(61,'Snickers',1.00,NULL,'snacks',NULL,NULL,NULL,'https://cdn.shopify.com/s/files/1/0102/3950/8531/products/33585_snickers_bar_1.86_oz_1_800x.jpg?v=1576013642'),(62,'Twix',1.00,NULL,'snacks',NULL,NULL,NULL,'https://expatspantry.com/wp-content/uploads/2018/02/twix-bar.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('1-initial_migration.js'),('2-product_model_image.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `store_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `store_name` varchar(45) NOT NULL,
  `store_phone` varchar(45) NOT NULL,
  `store_email` varchar(255) NOT NULL,
  `store_street` varchar(255) NOT NULL,
  `store_state` varchar(45) NOT NULL,
  `store_zip_code` char(5) NOT NULL,
  `store_image` varchar(255) NOT NULL,
  `store_active` tinyint NOT NULL,
  PRIMARY KEY (`store_id`),
  UNIQUE KEY `store_id_UNIQUE` (`store_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `store_owner` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip_code` char(5) NOT NULL,
  `country` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `admin_status` tinyint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`wishlist_id`),
  UNIQUE KEY `wishlist_id_UNIQUE` (`wishlist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-04 23:03:46
