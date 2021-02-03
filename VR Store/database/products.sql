DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    ProductId TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    ProductName VARCHAR(255),
    Price INT,
    Category VARCHAR(255),
    ProductImg VARCHAR(255)
);

INSERT INTO products (ProductName, Price, Category, ProductImg)
Values  ("Oculus Quest 2", 300, "Headsets", "assets/images/oculus-quest-2.jpg"),
        ("Logitech Driving Force G29", 250, "Steering Wheels", "assets/images/logiteck-driving-force-g29.jpg"),
        ("DeadEye VR Magnetic HOTAS Joystick Adapter", 20, "Joysticks", "assets/images/HOTAS-joystick-adapter.jpg"),
        ("HTC Vive Cosmos Elite", 900, "Headsets", "assets/images/htc-vive.jpg"),
        ("Skywin PSVR Charging Display Stand", 40, "Accessories", "assets/images/charging-display-stand.jpg"),
        ("No Man's Sky", 60, "Games", "assets/images/No-mans-sky.png");