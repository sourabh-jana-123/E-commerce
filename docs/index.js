const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const paths = require('./paths');
const security = require('./security');

module.exports = {
    ...basicInfo,
    ...servers,
    ...paths,
    ...components,
    ...tags,
    ...security
};