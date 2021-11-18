d3.json('https://api.punkapi.com/v2/beers').then((data) => {
    
    const linearScale = d3.scaleLinear()
	    .domain(d3.extent(data, d=> d.abv)) 
	    .range([0, 700])

    const sqrtScale = d3.scaleSqrt()
        .domain(d3.extent(data, d=> d.abv))
        .range([0, 30])

    // const linearScale = d3.scaleLinear()
	//     .domain(d3.extent(data, d=> d.abv)) 
	//     .range([0, 700])

    d3.select('#wrapper')
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', d => sqrtScale(d.abv))
        .attr('cx', d => linearScale(d.abv))
        // .attr("height", bar_height)
        // .attr("width", (d) => d.abv * 20)
        // .attr("y", (d, i) => i * (bar_height + 5))
});