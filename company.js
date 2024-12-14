
const data = [
  { title: "Learn JavaScript", type: "Tutorial" },
  { title: "Latest Tech News", type: "News" },
  { title: "Top 10 Blogging Tips", type: "Blog" },
  { title: "CSS for Beginners", type: "Tutorial" },
  { title: "Breaking News Today", type: "News" }
];

// Display initial results
const resultsDiv = document.getElementById("results");
function displayResults(filteredData) {
  resultsDiv.innerHTML = "";
  if (filteredData.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }
  filteredData.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.textContent = `${item.title} (${item.type})`;
    resultsDiv.appendChild(div);
  });
}
displayResults(data);

// Filter results
function filterResults() {
  const query = document.getElementById("search-box").value.toLowerCase();
  const selectedFilters = Array.from(document.querySelectorAll(".filter:checked")).map(input => input.value);
  const filteredData = data.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query);
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(item.type);
    return matchesQuery && matchesFilter;
  });
  displayResults(filteredData);
}