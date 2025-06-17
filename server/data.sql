CREATE DATABASE IF NOT EXISTS BeninTaleMap;
USE BeninTaleMap;

CREATE TABLE country (
    name VARCHAR(100) NOT NULL,
    cities TEXT,
    population INTEGER,
    PRIMARY KEY (name)
);

CREATE TABLE city (
    name VARCHAR(100) NOT NULL,
    myths TEXT,
    origin VARCHAR(100) NOT NULL,
    PRIMARY KEY (name),
    FOREIGN KEY (origin) REFERENCES country(name)
);

-- INSERT INTO country (name, cities, population) VALUES
-- ('Bénin', '["Porto-Novo", "Abomey", "Ouidah"]', 13600000),
-- ('Nigeria', '["Benin City"]', 223800000);

-- INSERT INTO city (name, myths, origin) VALUES
-- ('Porto-Novo', '["Mythe du roi Toffa qui a signé un pacte avec les esprits", "Légende des esprits protecteurs de Hogbonu"]', 'Bénin'),
-- ('Abomey', '["Histoire des bas-reliefs des palais royaux", "Légende du roi Behanzin contre les colons"]', 'Bénin'),
-- ('Ouidah', '["Serpent sacré de Kpassè", "Mythe de la Porte du Non-Retour"]', 'Bénin');