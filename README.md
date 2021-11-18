# Functional-Programming

<br/>

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
Vervolgens kun je een lokale server opzetten waarop het script gedraaid kan worden. In het mapje "01-Excersises" zijn alle opdrachten / oefeningen te vinden die ik gemaakt heb om SVG en D3 te snappen. In het mapje "02-BarChart" is de uiteindelijk eindopdracht van dit vak te vinden.

<br/>

## Bronnen
Tijdens dit project heb ik meerdere bronnen gebruikt die mij goed op weg geholpen hebben.
* [Learn D3 Tutorial](https://observablehq.com/collection/@d3/learn-d3)
* [Student First Bar Chart - Tutorial](https://github.com/sgratzl/d3tutorial/blob/main/README.md)
* [Making a Bar Chart with D3 and SVG](https://www.youtube.com/watch?v=NlBt-7PuaLk&ab_channel=CurranKelleher)
* [Punk API](https://punkapi.com/documentation/v2)
* [D3.js Library](https://d3js.org/)
* Medestudenten uit Support Group 3

<br/>

## License

Auteur: Ravi Stil - 2021

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
