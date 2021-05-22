import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-promptclose extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-promptclose:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    // https://stackoverflow.com/questions/24764626/any-way-to-prevent-disable-ctrl-key-shortcuts-in-the-browser/24764878#24764878
    window.addEventListener('beforeunload', e => {
      e.preventDefault();
      // Chrome requires returnValue to be set
      e.returnValue = 'Are you sure you want to close JupyterLab?';
    });
    console.log('JupyterLab extension jupyterlab-promptclose is activated!');
  }
};

export default extension;
