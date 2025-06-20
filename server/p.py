# Longer and more descriptive myths
long_myths_data = {
    "Abomey": "...",  # Replace with full myth (as in your original snippet)
    "Ouidah": "...",
    "Porto-Novo": "...",
    "Allada": "...",
    "Nikki": "...",
    "Parakou": "...",
    "Savalou": "...",
    "Natitingou": "...",
    "Dassa-Zoumè": "...",
    "Kétou": "...",
    "Cotonou": "...",
    "Tchaourou": "...",
    "Bohicon": "..."
}

# City information including static metadata
city_data = {
    "Abomey": {
        "Présentation": "Ancienne capitale du royaume du Danxomè. Abomey est célèbre pour ses palais royaux classés à l'UNESCO.",
        "Figures clés": "Houégbadja, Guézo, Béhanzin, Amazones du Dahomey",
        "Culte": "Vodoun (Dan, Gu)",
        "Anecdotes": "Trônes sur crânes humains ; murs faits d'argile et sang humain"
    },
    "Ouidah": {
        "Présentation": "Ville côtière, haut lieu du commerce des esclaves et capitale spirituelle du vodoun.",
        "Figures clés": "Francisco Félix de Souza",
        "Culte": "Vodoun (Dangbé, Mami Wata, Legba, Gu)",
        "Anecdotes": "Tuer un python = funérailles obligatoires ; pythons libres"
    },
    "Porto-Novo": {
        "Présentation": "Capitale administrative du Bénin, influences yoruba, brésilienne et française.",
        "Figures clés": "Princes d’Oyo, Agoudas",
        "Culte": "Orisha (Shango, Ogun), Vodoun, Zangbéto",
        "Anecdotes": "Interdiction de voir sous un Zangbéto ; ville aux trois religions"
    },
    "Allada": {
        "Présentation": "Ville historique considérée comme berceau du Danxomè",
        "Figures clés": "Te-Agbanlin, descendants",
        "Culte": "Vodoun (Legba)",
        "Anecdotes": "\"Mère des royaumes fon\", fête annuelle des descendants royaux"
    },
    "Nikki": {
        "Présentation": "Capitale culturelle des Bariba, connue pour ses cavaliers",
        "Figures clés": "Séro Kora, rois de Nikki",
        "Culte": "Ancêtres, masques, Gaani",
        "Anecdotes": "Gaani rassemble Bariba ; trône royal conservé"
    },
    "Parakou": {
        "Présentation": "Ville commerçante du nord, multiethnique",
        "Figures clés": "Commerçants haoussa et dendi",
        "Culte": "Islam dominant, animisme, vodoun",
        "Anecdotes": "Réputée pour son marché et son artisanat"
    },
    "Savalou": {
        "Présentation": "Haut lieu du culte de Dan (serpent)",
        "Figures clés": "Rois fon, prêtres de Dan",
        "Culte": "Dan, vodoun",
        "Anecdotes": "Fête de l’igname ; ville perchée et mystique"
    },
    "Natitingou": {
        "Présentation": "Ville Somba, célèbre pour les Tata (maisons-forteresses)",
        "Figures clés": "Bâtisseurs de Tata, chefs spirituels",
        "Culte": "Ancêtres, nature, initiation",
        "Anecdotes": "Tata classés UNESCO ; rites stricts pour enfants"
    },
    "Dassa-Zoumè": {
        "Présentation": "Ville religieuse, collines mystiques",
        "Figures clés": "Prêtres vodoun, missionnaires catholiques",
        "Culte": "Vodoun (Lokossa, Oro), christianisme",
        "Anecdotes": "Fête mariale annuelle ; 41 collines sacrées"
    },
    "Kétou": {
        "Présentation": "Cité yoruba, centre spirituel",
        "Figures clés": "Rois Alaketou, prêtres orisha",
        "Culte": "Orisha (Shango, Ogun, Ifa), vodoun",
        "Anecdotes": "Cité sœur d’Oyo et Ife ; rites orisha ancestraux"
    },
    "Cotonou": {
        "Présentation": "Capitale économique, portuaire",
        "Figures clés": "Esprits des eaux, marchands",
        "Culte": "Vodoun (Mami Wata, Tohoue), islam, christianisme",
        "Anecdotes": "\"Embouchure de la rivière de la mort\" ; rituels contre inondations"
    },
    "Tchaourou": {
        "Présentation": "Ville des Nagot et Bariba",
        "Figures clés": "Chefs, chasseurs initiés",
        "Culte": "Vodoun (Egoun, Oro), islam, animisme",
        "Anecdotes": "Célèbre pour cérémonies Egouny ; forêts interdites"
    },
    "Bohicon": {
        "Présentation": "Voisine d’Abomey, carrefour historique",
        "Figures clés": "Dignitaires, marchands",
        "Culte": "Vodoun (Gou, Dan, Egoun)",
        "Anecdotes": "Carrefour stratégique ; ancienne gare ferroviaire"
    }
}

# Assemble the text
formatted_city_blocks = []
for city, sections in city_data.items():
    block = (
        f"{city}\n"
        f"Présentation : {sections['Présentation']}\n"
        f"Mythe : {long_myths_data[city]}\n"
        f"Figures clés : {sections['Figures clés']}\n"
        f"Culte : {sections['Culte']}\n"
        f"Anecdotes : {sections['Anecdotes']}\n"
    )
    formatted_city_blocks.append(block)

# Join all blocks
final_text = "\n\n".join(formatted_city_blocks)

# Write to file
with open("data.txt", "w") as f:
    f.write(final_text)
