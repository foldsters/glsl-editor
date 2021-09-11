var CodeMirror = require('codemirror')
var register = require('./glsl')

module.exports = [{
  id: 'glsl-extension',
  autoStart: true,
  activate: function (app) {
    registerOpenSCADFileType(app);
    register(CodeMirror);
    console.log('JupyterLab extension glsl-extension is activated!');
  }
}];

function registerOpenSCADFileType(app) {
  app.docRegistry.addFileType({
    name: 'GLSL',
    displayName: 'GLSL',
    extensions: ['glsl'],
    mimeTypes: ['text/x-glsl']
  });
}