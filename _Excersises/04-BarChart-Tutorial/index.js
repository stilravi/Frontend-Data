// https://www.youtube.com/watch?v=BDpBAFvdjYo&t=334s&ab_channel=KrisFoster

// const data = [
//     { name: 'Simon', score: 80 },
//     { name: 'Mary', score: 90 },
//     { name: 'Mary', score: 70 },
//     { name: 'Mary', score: 40 },
//     { name: 'Mary', score: 100 }
// ]

d3.json('https://api.punkapi.com/v2/beers').then((data) => {
    console.log(data);
    const width = 1800
    const height = 700
    const margin = { top: 50, bottom: 50, left: 50, right: 50 }

    const svg = d3.select('#d3-container')
        .append('svg')
        .attr('height', height - margin.top - margin.bottom)
        .attr('width', width - margin.left - margin.right)
        .attr("viewBox", [0, 0, width, height]);

    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)

    const y = d3.scaleLinear()
        .domain([0, 20])
        .range([height - margin.bottom, margin.top])

    svg
        .append('g')
        .selectAll('rect')
        .data(data)
        // .data(data.sort((a, b) => d3.descending(a.score, b.score))) // Zorgt voor Sorteren van de bars
        .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', (d) => y(d.abv))
            .attr('height', d => y(0) - y(d.abv))
            .attr('width', x.bandwidth())

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
            .attr("font-size", '20px')
        }
        
    function xAxis(g) {
    g.attr("transform", `translate(0,${height + 10 - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr("font-size", '20px')
    }
            
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
})