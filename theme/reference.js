/* On the test summary page, toggles the popup for the uncovered tests. */
function spec_toggle_uncovered(item_index) {
    let el = document.getElementById(`uncovered-${item_index}`);
    const currently_hidden = el.classList.contains('popup-hidden');
    const all = document.querySelectorAll('.uncovered-rules-popup');
    all.forEach(element => {
        element.classList.add('popup-hidden');
    });
    if (currently_hidden) {
        el.classList.remove('popup-hidden');
    }
}

function spec_toggle_tests(rule_id) {
    let el = document.getElementById(`tests-${rule_id}`);
    const currently_hidden = el.classList.contains('popup-hidden');
    const all = document.querySelectorAll('.tests-popup');
    all.forEach(element => {
        element.classList.add('popup-hidden');
    });
    if (currently_hidden) {
        el.classList.remove('popup-hidden');
    }
}

function toggle_grammar() {
    const grammarRailroad = get_railroad();
    set_railroad(!grammarRailroad);
    update_railroad();
}

function get_railroad() {
    let grammarRailroad = null;
    try {
        grammarRailroad = localStorage.getItem('grammar-railroad');
    } catch (e) {
        // Ignore error.
    }
    grammarRailroad = grammarRailroad === 'true' ? true : false;
    return grammarRailroad;
}

function set_railroad(newValue) {
    try {
        localStorage.setItem('grammar-railroad', newValue);
    } catch (e) {
        // Ignore error.
    }
}

function update_railroad() {
    const grammarRailroad = get_railroad();
    const railroads = document.querySelectorAll('.grammar-railroad');
    railroads.forEach(element => {
        if (grammarRailroad) {
            element.classList.remove('grammar-hidden');
        } else {
            element.classList.add('grammar-hidden');
        }
    });
    const buttons = document.querySelectorAll('.grammar-toggle');
    buttons.forEach(button => {
        if (grammarRailroad) {
            button.innerText = "Hide Railroad";
        } else {
            button.innerText = "Show Railroad";
        }
    });
}

(function railroad_onload() {
    update_railroad();
})();
