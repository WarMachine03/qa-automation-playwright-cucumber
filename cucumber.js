module.exports = {
  default: {
    require: ["src/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress", "html:reports/cucumber-report.html"],
    publishQuiet: true
  }
};
