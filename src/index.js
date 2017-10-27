import ColorPalette from "./components/yj-resume/color-palette";
const YJResumeElement = require('./components/yj-resume/resume');
const YJBasicInfoElement = require('./components/yj-resume/basic-info');
const YJTag = require('./components/yj-resume/tag');
const YJTagBar = require('./components/yj-resume/tag-bar');
const YJLink = require('./components/yj-resume/link');
const YJLinkBar = require('./components/yj-resume/link-bar');

document.body.style = `
  margin: 0;
  padding: 0;
  color: ${ColorPalette.Commons.Text};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

document.getElementsByTagName('yj-resume')[0].style = `
  height: 100vh;
  width: 100vw;
`;

