# Functional-Programming
> Dit is de Readme van Frontend Data van 8 november 2021 t/m 19 november 2021. <br/><br/>
> Ravi Stil   |   19-11-2021   |   Frontend Data   |   Information Design: Tech Track

<br/>

![Intro Image](https://github.com/stilravi/Frontend-Data/blob/main/_wiki/00-overview.png)

## Inhoudsopgave
* [Opdracht](#Opdracht)
* [Data](#Data)
    * [Enquete Dataset](#Enquete-Dataset])
    * [Rest API](#Rest-API])
* [Instalatie](#Instalatie)
* [Bronnen](#Bronnen)
* [License](#License)

## Opdracht
Schrijf een programma (stuk code) die een aangeleverde Dataset en een Rest API ontleed en opschoont waarna er vervolgens
gewerkt kan worden. Hierbij is het de bedoeling dat de Functional Programming principles worden toegepast en dat het proces
wordt bijgehouden in de documentatie op Github.

In de eerste week (_25-10-2021 t/m 29-10-2021_) is het de bedoeling dat er gebruik wordt gemaakt van een aangeleverde Dataset.
Deze Dataset is voortgekomen uit een Enquete die alle studenten van de Tech Track hebben ingevuld. In de tweede week 
(_01-11-2021 t/m 05-11-2021_) moet er een Rest API gekozen worden door de student en moet deze net als de Dataset uit week 1 ontleed en opgeschoond worden.

## Data

### Enquete Dataset
De Data die ik ga opschonen is voortgekomen uit een online Enquete die is ingevuld door alle Tech Track studenten. In deze Enquete zijn 14 random vragen gesteld aan de studenten. Ik ben mij vervolgens gaan richten op het ontleden en opschonen van één vraag uit de aangeleverde [Dataset](https://github.com/stilravi/Functional-Programming/blob/main/01-enquete/dataset/dataset.json). Dit is de volgende vraag:
```json
"Kaas is ook een zoogdier?": "Antwoord",
```
Op deze vraag zijn meerdere antwoorden gegeven die eerst opgeschoond moeten worden voordat er mee gewerkt kan worden. Denk 
bijvoorbeeld hierbij aan antwoorden met vraagtekens, punten en hoofdletters. Op de [Dataset Analyse](https://github.com/stilravi/Functional-Programming/wiki/Data-Analyse) in de Wiki is meer te vinden over wat deze Data precies inhoud en wat er veranderd moet worden.

De Live Demo is te vinden op de volgende link: <br/>
[Live Demo - Enquete Dataset](https://stilravi.github.io/Functional-Programming/01-enquete/)

### Rest API
Ook moest er naast de Enquete Dataset data ingeladen en opgeschoond worden die uit een Rest API kwam. Deze API mocht ik zelf uitkiezen en ik heb gekozen voor de [Punk API](https://punkapi.com/documentation/v2). Met Deze API kun je veel informatie over een groot aantal biertjes vinden en inladen in je website. Deze Dataset is al redelijk schoon dus hoeft er niet veel opgeschoond te worden. Meer informatie over wat ik precies opgeschoond heb en hoe ik deze API gebruikt heb is te vinden in de [Wiki](https://github.com/stilravi/Functional-Programming/wiki).

De Live Demo is te vinden op de volgende link: <br/>
[Live Demo - Rest API](https://stilravi.github.io/Functional-Programming/02-api/)

## Instalatie
Om dit project binnen te halen kan deze Repository gecloned worden naar je eigen Device.
```shell
$git clone https://github.com/stilravi/Functional-Programming.git
```
Vervolgens kun je een lokale server opzetten waarop het script gedraaid kan worden. In het mapje "_01-enquete_" is het script te vinden van het opschonen van de Enquete Dataset en in het mapje "_02-api_" is het script van de Rest API te vinden.

## Bronnen
Tijdens dit project heb ik meerdere bronnen gebruikt die mij goed op weg geholpen hebben.
* Ik heb een video bekeken die mij goed heeft geholpen met het **Fetchen en Renderen** van een API. Dit is de volgende video: [Fetch API & Rendering Data with JavaScript video](https://www.youtube.com/watch?v=FN_ffvw_ksE&t=1138s&ab_channel=CodeBushi)
* [Robert](https://github.com/roberrrt-s) heeft mij geholpen om een bepaalde vraag uit de Dataset te halen en de antwoorden hiervan in een string te stoppen. Ook heeft Robert mij geholpen met het aanmaken van JS Modules en het exporteren en importeren hiervan.
* Ter inspiratie voor het inrichten van de Github en Wiki heb ik gekeken naar de Github van [Deanne](https://github.com/deannabosschert).
* Om ervoor te zorgen dat elke punt aan het eind van een zin uit de API werd vervangen heb ik gekeken naar [deze code](https://stackoverflow.com/questions/20925157/remove-dot-sign-from-the-end-of-the-string).
* Voor de data van de API opdracht heb ik gebruik gemaakt van de [Punk API](https://punkapi.com/documentation/v2).

## License

Auteur: Ravi Stil - 2021

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
