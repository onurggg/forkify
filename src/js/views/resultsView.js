class ResultsView {}
import View from './View.js';

import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _message = 'No recipes found for you query! Please try again ! ::::)';
  _errorMessage = 'We could not find that recipe. Please try another one!';

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new ResultView();
