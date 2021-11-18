# Functional-Programming
> Dit is de Readme van Frontend Data van 8 november 2021 t/m 19 november 2021. <br/><br/>
> Ravi Stil   |   19-11-2021   |   Frontend Data   |   Information Design: Tech Track

<br/>

![Intro Image](https://github.com/stilravi/Frontend-Data/blob/main/_wiki/00-overview.png)

<br/>

## Inhoudsopgave
* [Opdracht](#Opdracht)
* [Data](#Data)
    * [Enquete Dataset](#Enquete-Dataset])
    * [Rest API](#Rest-API])
* [Instalatie](#Instalatie)
* [Bronnen](#Bronnen)
* [License](#License)

<br/>

## Opdracht
De volgende omschrijving van de opdracht hebben wij gekregen op de eerste dag: "Create a data visualisation (using the d3 library) based on given data where data can be explored through interaction using enter(), update(), and exit()". De bedoeling was dus dat er een data visualisatie gemaakt moest worden met de D3 Library. Hierbij moest de Data uit een API komen en moest deze data vanuit de API verwerkt worden in de visualisatie. Dit kan gedaan worden met de enter(), update(). en exit() functions maar in de nieuwste versie van D3 kan dit ook alleen met .join gedaan worden.

<br/>

## Data

### D3 Library
Om de Datavisualisatie te maken moet er gebruik gemaakt worden van de D3 Library. Dit is een JavaScript Library die erg handig is voor het maken van veel verschillende soorten Datavisualisaties. De documentatie van deze Library is te vinden op [deze pagina](https://d3js.org/).

### Punk API
De Data die in de Datavisualisatie moest komen moet vanuit een API komen. Deze API mocht ik zelf uitkiezen en ik heb gekozen voor de [Punk API](https://punkapi.com/documentation/v2). Met Deze API kun je veel informatie over een groot aantal biertjes vinden en inladen in je website. Deze Dataset is al redelijk schoon dus hoeft er niet veel opgeschoond te worden.

De Live Demo is te vinden op de volgende link: <br/>
[Live Demo - Bar Chart](https://stilravi.github.io/Frontend-Data/02-BarChart/index.html)

<br/>

## Instalatie
Om dit project binnen te halen kan deze Repository gecloned worden naar je eigen Device.
```shell
$git clone https://github.com/stilravi/Frontend-Data.git
```
Vervolgens kun je een lokale server opzetten waarop het script gedraaid kan worden. In het mapje "_01-enquete_" is het script te vinden van het opschonen van de Enquete Dataset en in het mapje "_02-api_" is het script van de Rest API te vinden.

<br/>

## Bronnen
Tijdens dit project heb ik meerdere bronnen gebruikt die mij goed op weg geholpen hebben.
* Ik heb een video bekeken die mij goed heeft geholpen met het **Fetchen en Renderen** van een API. Dit is de volgende video: [Fetch API & Rendering Data with JavaScript video](https://www.youtube.com/watch?v=FN_ffvw_ksE&t=1138s&ab_channel=CodeBushi)
* [Robert](https://github.com/roberrrt-s) heeft mij geholpen om een bepaalde vraag uit de Dataset te halen en de antwoorden hiervan in een string te stoppen. Ook heeft Robert mij geholpen met het aanmaken van JS Modules en het exporteren en importeren hiervan.
* Ter inspiratie voor het inrichten van de Github en Wiki heb ik gekeken naar de Github van [Deanne](https://github.com/deannabosschert).
* Om ervoor te zorgen dat elke punt aan het eind van een zin uit de API werd vervangen heb ik gekeken naar [deze code](https://stackoverflow.com/questions/20925157/remove-dot-sign-from-the-end-of-the-string).
* Voor de data van de API opdracht heb ik gebruik gemaakt van de [Punk API](https://punkapi.com/documentation/v2).

<br/>

## License

Auteur: Ravi Stil - 2021

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
