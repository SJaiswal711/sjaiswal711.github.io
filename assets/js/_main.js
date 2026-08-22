/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

/*
   Theme handling
   ========================================================================== */

// Determine the saved theme setting.
// Allowed values: "dark", "light", or "system".
// Default: "system".
let determineThemeSetting = () => {
  const themeSetting = localStorage.getItem("theme");

  if (
    themeSetting === "dark" ||
    themeSetting === "light" ||
    themeSetting === "system"
  ) {
    return themeSetting;
  }

  return "system";
};


// Determine the actual theme to display.
// If the setting is "system", use the browser/OS preference.
let determineComputedTheme = () => {
  const themeSetting = determineThemeSetting();

  if (themeSetting === "dark" || themeSetting === "light") {
    return themeSetting;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};


// Set the theme on page load or when explicitly called.
let setTheme = (theme) => {
  const useTheme = theme || determineComputedTheme();

  if (useTheme === "dark") {
    $("html").attr("data-theme", "dark");

    $("#theme-icon")
      .removeClass("fa-sun")
      .addClass("fa-moon");

  } else {
    $("html").removeAttr("data-theme");

    $("#theme-icon")
      .removeClass("fa-moon")
      .addClass("fa-sun");
  }
};


// Toggle manually between light and dark mode.
let toggleTheme = () => {
  const currentTheme = $("html").attr("data-theme");

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  localStorage.setItem("theme", newTheme);

  setTheme(newTheme);
};


/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart
// as a new node. This allows the JSON data to be retrieved when the theme
// is switched. The listener is only added when Plotly data is present.

import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';

let plotlyElements = document.querySelectorAll(
  "pre>code.language-plotly"
);

if (plotlyElements.length > 0) {

  document.addEventListener("readystatechange", () => {

    if (document.readyState === "complete") {

      plotlyElements.forEach((elem) => {

        // Parse the Plotly JSON data and hide it.
        const jsonData = JSON.parse(elem.textContent);

        elem.parentElement.classList.add("hidden");

        // Create the Plotly container.
        const chartElement = document.createElement("div");

        elem.parentElement.after(chartElement);

        // Select the correct Plotly theme.
        const theme =
          determineComputedTheme() === "dark"
            ? plotlyDarkLayout
            : plotlyLightLayout;

        if (jsonData.layout) {

          jsonData.layout.template =
            jsonData.layout.template
              ? {
                  ...theme,
                  ...jsonData.layout.template
                }
              : theme;

        } else {

          jsonData.layout = {
            template: theme
          };

        }

        Plotly.react(
          chartElement,
          jsonData.data,
          jsonData.layout
        );

      });

    }

  });

}


/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {

  // SCSS SETTINGS
  // These should match the values in the relevant SCSS files.
  const scssLarge = 925;
  const scssMastheadHeight = 70;


  /*
     Set the initial theme.
     If the user has not manually selected a theme,
     follow the OS/browser preference.
  */

  setTheme();


  /*
     Follow system theme changes only when
     the user has not manually selected light/dark.
  */

  const colorSchemeQuery =
    window.matchMedia("(prefers-color-scheme: dark)");

  colorSchemeQuery.addEventListener("change", (event) => {

    if (!localStorage.getItem("theme")) {

      setTheme(
        event.matches
          ? "dark"
          : "light"
      );

    }

  });


  /*
     Enable the theme toggle.
  */

  $("#theme-toggle").on("click", toggleTheme);


  /*
     Enable the sticky footer.
  */

  let didResize = false;

  const bumpIt = function () {

    $("body").css("padding-bottom", "0");
    $("body").css(
      "margin-bottom",
      $(".page__footer").outerHeight(true)
    );

  };


  $(window).resize(function () {
    didResize = true;
  });


  setInterval(function () {

    if (didResize) {

      didResize = false;
      bumpIt();

    }

  }, 250);


  bumpIt();


  /*
     FitVids initialization.
  */

  fitvids();


  /*
     Follow menu dropdown.
  */

  $(".author__urls-wrapper button").on("click", function () {

    $(".author__urls").fadeToggle(
      "fast",
      function () {}
    );

    $(".author__urls-wrapper button")
      .toggleClass("open");

  });


  /*
     Restore the follow menu if toggled on a window resize.
  */

  jQuery(window).on("resize", function () {

    if (
      $(".author__urls.social-icons").css("display") === "none" &&
      $(window).width() >= scssLarge
    ) {

      $(".author__urls").css(
        "display",
        "block"
      );

    }

  });


  /*
     Initialize smooth scrolling.
     This needs to be slightly more than
     the fixed masthead height.
  */

  $("a").smoothScroll({

    offset: -scssMastheadHeight,
    preventDefault: false,

  });

});
