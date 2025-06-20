CREATE DATABASE IF NOT EXISTS BeninTaleMap;
USE BeninTaleMap;

CREATE TABLE country (
    name VARCHAR(100) NOT NULL,
    cities JSON,
    population INTEGER,
    PRIMARY KEY (name)
);

CREATE TABLE city (
    name VARCHAR(100) NOT NULL,
    presentation TEXT,
    myths JSON,
    celebrity VARCHAR(100),
    religion JSON,
    origin VARCHAR(100) NOT NULL,
    about_reg JSON,
    PRIMARY KEY (name),
    FOREIGN KEY (origin) REFERENCES country(name)
);

INSERT INTO country (name, cities, population) VALUES
('Bénin', '["Abomey", "Ouidah", "Porto-Novo", "Allada", "Nikki",
"Parakou", "Savalou", "Natitingou", "Dassa-Zoumè", "Kétou", "Cotonou",
"Tchaourou", "Bohicon"]', 13600000);

-- INSERT INTO city (name, myths, origin) VALUES
-- ('Porto-Novo', '["Mythe du roi Toffa qui a signé un pacte avec les esprits", "Légende des esprits protecteurs de Hogbonu"]', 'Bénin'),
-- ('Abomey', '["Histoire des bas-reliefs des palais royaux", "Légende du roi Behanzin contre les colons"]', 'Bénin'),
-- ('Ouidah', '["Serpent sacré de Kpassè", "Mythe de la Porte du Non-Retour"]', 'Bénin');
