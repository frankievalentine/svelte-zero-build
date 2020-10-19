
import App from "../index.svelte";

const target = document.getElementById("app");
let props = document.getElementById("props");
props = props.innerHTML;
props = JSON.parse(props);
const app = new App({ target, props, hydrate: true });
