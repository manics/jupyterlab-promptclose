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
    console.log('JupyterLab extension jupyterlab-promptclose is activated!');
  }
};

export default extension;
