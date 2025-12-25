module.exports = {
  content: ["_site/**/*.html"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: {
    standard: [/^fa-/, /^ai-/, /^ti-/, /^si-/, /^badge/, /^btn/, /^nav/, /^dropdown/, /^modal/, /^tooltip/, /^popover/, /^carousel/, /^alert/, /^close/, /^collapse/, /^show/, /^fade/, /^tab/, /^active/, /^disabled/],
    deep: [/^fa-/, /^ai-/, /^ti-/, /^si-/],
    greedy: [/^fa-/, /^ai-/, /^ti-/, /^si-/]
  }
};

