import ColorPalette from "./components/yj-resume/color-palette";
require('./components/yj-resume/resume');
require('./components/yj-resume/basic-info');
require('./components/yj-resume/tag');
require('./components/yj-resume/tag-bar');
require('./components/yj-resume/link');
require('./components/yj-resume/link-bar');
require('./components/yj-resume/newsfeed');
require('./components/yj-resume/news');
require('./components/yj-resume/bio');
require('./components/yj-resume/resource');
require('./components/yj-resume/resource-bar');
require('./components/yj-resume/timeline');
require('./components/yj-resume/event');
require('./components/yj-resume/achievement-timeline');
require('./components/yj-resume/achievement');
require('./components/yj-resume/education-history');
require('./components/yj-resume/education-record');
require('./components/yj-resume/work-history');
require('./components/yj-resume/work-record');


document.body.style = `
  @import "./external/font-awesome-4.7.0/css/font-awesome.css";
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: ${ColorPalette.Commons.Text};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const resume = document.getElementsByTagName('yj-resume')[0];
resume.style = `
  height: 100vh;
  width: 100vw;
`;

const lineHeight = "1.5em";

resume.innerHTML += `
<style>
ul {
  list-style-type: square;
  margin: 0;
  padding: 0 0 0 18px;
  line-height: ${lineHeight};
}
li {
  line-height: ${lineHeight};
}
p {
  padding: 3px 0;
  margin: 0;
  line-height: ${lineHeight};
}
</style>
`;