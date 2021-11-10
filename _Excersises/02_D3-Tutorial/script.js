const margin = { top: 40, bottom: 10, left: 120, right: 20 }
const width = 800 - margin.left - margin.right
const height = 1600 - margin.top - margin.bottom

const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)
let data
const bar_height = 50

d3.json('https://api.punkapi.com/v2/beers').then((json) => {
  data = json;
  console.log(data)
  update(data);
});

function update(new_data) {
    const rect = g
        .selectAll("rect")
        .data(new_data)
        .join(
            (enter) => {
                const rect_enter = enter.append('rect').attr('x', 0)
                rect_enter.append('title')
                console.log(rect_enter)
                return rect_enter
            },
            (update) => update,
            (exit) => exit.remove()
        );
    rect
        .attr("height", bar_height)
        .attr("width", (d) => d.abv * 20)
        .attr("y", (d, i) => i * (bar_height + 5))
}

