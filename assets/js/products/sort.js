import updateQuery from "./updateQuery.js";

export function handleChangeSort(sortField, sortOrder = "asc") {
  updateQuery({ sort: sortField, order: sortOrder });
}

export function setUpSort() {
  document.addEventListener("click", (e) => {
    const btnSort = e.target.closest("button[data-sort-field]");
    if (!btnSort) return;
    handleChangeSort(btnSort.dataset.sortField, btnSort.dataset.sortOrder);
  })
}