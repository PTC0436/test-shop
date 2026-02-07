import matchRoute from "/test/assets/js/products/matchRoute.js";
import getHashPath from "./getHashPath.js";
import setUpSlider from "./setUpSlider.js";
import { setUpFilter, setUpFilterItem } from "./filter.js";
import { setUpSeachBar, setUpSearch } from "./search.js";
import { setUpSort } from "./sort.js";
import { setUpConstraint } from "./constraint.js";
import setUpScrollTop from "./setUpScrollTop.js";
import {
  setUpProductMain,
  setUpProductMainOptions,
} from "./setUpProductMain.js";
import { renderPageNotFound404 } from "./products.js";

async function render() {
  const app = document.querySelector("#app");
  const { path, query } = getHashPath();
  const match = matchRoute(path);
  if (!match) {
    app.innerHTML = renderPageNotFound404();
    return;
  }
  const { html, route } = await match.route.render({
    ...match.params,
    query,
  });
  if (!html) {
    app.innerHTML = renderPageNotFound404();
    return;
  }
  app.innerHTML = html;
  switch (route) {
    case "PRODUCT_HOME": {
      setUpFilterItem();
      setUpSeachBar();
      break;
    }
    case "PRODUCT_DETAIL": {
      setUpSlider();
      setUpProductMainOptions();
      break;
    }
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("hashchange", render);

render();

setUpScrollTop();
setUpFilter();
setUpSearch();
setUpSort();
setUpConstraint();
setUpProductMain();
