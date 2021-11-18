// Defining Margins, Heights and Widths
const margin = { top: 40, bottom: 10, left: 300, right: 20 }
const width = 850 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

// Creates sources <svg> element
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)

// Group used to enforce margin
const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

// Scales setup
const xscale = d3.scaleLinear().range([0, width])
const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.4)

// Axis setup
const xaxis = d3.axisTop().scale(xscale).tickSizeOuter([0])
const g_xaxis = g.append("g").attr("class", "x axis")
const yaxis = d3.axisLeft().scale(yscale).tickSizeOuter([0])
const g_yaxis = g.append("g").attr("class", "y axis")

// Color Scale
const colorScale = d3.scaleSequential(d3.interpolateRgb("#a8c0ff", "#3A4FCF")).domain([0,25])

// D3 Fetch
d3.json('https://api.punkapi.com/v2/beers').then((json) => {
  data = json
  update(data)
});

// Update Data function
function update(new_data) {
  //Update the scales
  xscale.domain([0, d3.max(new_data, (d) => d.abv)])
  yscale.domain(new_data.map((d) => d.name))
  
  //Render the axis
  g_xaxis.transition().call(xaxis)
  g_yaxis.transition().call(yaxis)

  // Render the chart with new data
  const rect = g
      .selectAll('rect')
      .data(new_data, (d) => d.name)
      .join('rect')
      .transition()
      .attr('height', yscale.bandwidth())
      .attr('width', (d) => xscale(d.abv))
      .attr('y', (d) => yscale(d.name))
      .attr('fill', (d,i) => colorScale(i))
}

d3.select("#filter-us-only").on("change", function () {
  // This will be triggered when the user selects or unselects the checkbox
  const checked = d3.select(this).property("checked")
  if (checked === true) {
    // Checkbox was just checked

    // Keep only data element whose country is US
    const filtered_data = data.filter((d) => d.abv < 8)

    update(filtered_data) // Update the chart with the filtered data
  } else {
    // Checkbox was just unchecked
    update(data) // Update the chart with all the data we have
  }
})